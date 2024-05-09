"use client"
import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils"
import { StaticImageData } from 'next/image';
import { VariantProps, tv } from 'tailwind-variants';


interface LazyImageProps extends VariantProps<typeof lazyImageVariants>{
    src?: string
    alt: string
    className?: string
    children?:ReactNode
    imageSize?:string
}

const lazyImageVariants = tv({
  base:"bg-no-repeat bg-cover w-[50px] h-[50px] bg-center",
})


const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className,imageSize, children }) => {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Aplica a imagem de fundo quando estiver visível
              if (backgroundRef.current) {
                backgroundRef.current.style.backgroundImage = `url(${src})`;
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { rootMargin: '0px 0px 0px 0px' } // Margem para detecção de interseção
      );
  
      if (backgroundRef.current) {
        observer.observe(backgroundRef.current);
      }
  
      // Cleanup do observador ao desmontar o componente
      return () => observer.disconnect();
    }, [src]);

    return <div  ref={backgroundRef} className={cn(lazyImageVariants({}), className)} style={{backgroundSize: imageSize}}>
      {children}
    </div>;
};

export default LazyImage;
