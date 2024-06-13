"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChart {
  dataPie:number[]
}

const PieChart = ({dataPie=[12, 19, 3]}:IPieChart) => {
  const data = {
    labels: ['ANDAMENTO', 'CONCLUIDO', 'ATRIBUIDO'],
    datasets: [
      {
        label: 'Status do projeto',
        data: dataPie,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(187,247,208 , 1)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
         'rgba(63,104,60, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;