"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'Atribuido' },
  { value: 10, label: 'Em Andamento' },
  { value: 15, label: 'Concluido' },
];

const size = {
  width: 350,
  height: 300,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
  fontWeight: "bold"

}));

interface PieCenterLabelProps {
  children: React.ReactNode;
}

function PieCenterLabel({ children }: PieCenterLabelProps) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div className="flex flex-col items-start h-[300px] w-[350px] max-lg:w-full">
      <PieChart
      className='w-[350px]'
      width={300}
        height={350}
        series={[{
          data,
          innerRadius: 90,
          paddingAngle: 5,
          outerRadius: 70,
        }]}

        margin={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10
        }}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 0,
          },
        }}>
        <PieCenterLabel>
          Status Projetos
        </PieCenterLabel>
      </PieChart>
    </div>
  );
}

