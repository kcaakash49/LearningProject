// import React from 'react'

// const AdminDashboard = () => {
//   return (
//     <div>
//       AdminDashboard is here
//     </div>
//   )
// }

// export default AdminDashboard


import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 300, 50, 44, 222],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [140, 240, 340, 555, 111, 666],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div>
      <div className='h-[400px]'>
        <Bar options={options} data={data} />
      </div>
    </div>

  )
}

export default AdminDashboard
