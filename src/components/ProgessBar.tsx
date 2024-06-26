"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

interface ProgressBarProps {
progress:number
colorIndicator:string
}

export function ProgressBar({progress, colorIndicator}:ProgressBarProps) {
  

  return <Progress value={progress} className="w-[100%] h-[10px]" colorIndictor={colorIndicator} />
}
