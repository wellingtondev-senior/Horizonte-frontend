"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

interface ProgressBarProps {
progress:number
}

export function ProgressBar({progress}:ProgressBarProps) {
  const [isProgress, setIsProgress] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => setIsProgress(6), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[100%]" />
}
