import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Providers from '@/util/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HA Horizonte Ambiental',
  description: 'Líder em fornecer estratégias eficazes para um futuro mais verde e resiliente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
          <meta property="og:locale" content="pt_BR" />
          <meta name="theme-color" content="#F98C17"/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="HA Horizonte Ambiental" />
          <meta property="og:title" content="HA Horizonte Ambiental" />
          <meta property="og:description" content="Líder em fornecer estratégias eficazes para um futuro mais verde e resiliente" />
          <meta property="og:url" content="https://chatbotflow.com.br" />
          <meta property="og:image" content="https://" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="HA Horizonte Ambiental" />
          <meta property="twitter:description" content="Líder em fornecer estratégias eficazes para um futuro mais verde e resiliente" />
          <meta property="twitter:image" content="https://" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet"/>        </head>
        <body className=''>
          <Providers>
            {children}
          </Providers>

        </body>
      </html>
    </>
  )
}
