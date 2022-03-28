import React, {useState} from 'react'
import ReactApexChart from "react-apexcharts"
import millify from "millify";
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Chart = ({history}) => {

    const currentPrice = history?.data?.history?.map(coin => millify(coin.price));
    const currentTimeStamp = history?.data?.history?.map(period => new Date(period.timestamp).toLocaleDateString());

      const data={
    responsive: true,
    labels: currentTimeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: currentPrice,
        fill: false,
         backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      }
    ]
  }

   const options = {
  responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    scales: {
        xAxes: [
                    {
                        // stacked: true,
                        type: 'time',
                        time: {
                            unit: 'day',
                            displayFormats: {
                                day: 'MMM DD YYYY'
                            }
                        },
                    },
                ],

    }
}


  return (
    <div>
       <Line options={options} data={data} />
    </div>
  )
}

export default Chart
