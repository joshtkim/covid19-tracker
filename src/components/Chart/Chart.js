import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import { Line, Bar } from '@ant-design/charts';

const Chart = ( country ) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();

        setDailyData(initialDailyData);
    }

    fetchMyAPI();
  }, []);

  // const data = [
  //   { date: dailyData.map(({ date }) => date), confirmed: dailyData.map(({ confirmed }) => confirmed) }
  // ];

  const date = dailyData.slice(0, 10).map(({ date }) => date)
  const confirmed = dailyData.slice(0, 10).map(({ confirmed }) => confirmed)

  const data = [
    { date: date[0], confirmed: confirmed[0] },
    { date: date[1], confirmed: confirmed[1] },
    { date: date[2], confirmed: confirmed[2] },
    { date: date[3], confirmed: confirmed[3] },
    { date: date[4], confirmed: confirmed[4] },
    { date: date[5], confirmed: confirmed[5] },
    { date: date[6], confirmed: confirmed[6] },
    { date: date[7], confirmed: confirmed[7] },
    { date: date[8], confirmed: confirmed[8] },
  ]

  const config = {
    data,
    width: 800,
    height: 400,
    xField: 'date',
    yField: 'confirmed',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  const barData = [];


  const barChart = (
    <Bar height={200} title="Country" data={barData} />
  )

  const lineChart = (
    <Line {...config} />
  )

  return (
    <div>
      {country ? barChart : lineChart}
    </div>
  )

}

export default Chart;