import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import { Line } from '@ant-design/charts';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();

        setDailyData(initialDailyData);
    }

    fetchMyAPI();
  }, []);

  const data = [
    { date: dailyData.map(({ date }) => date), confirmed: dailyData.map(({ confirmed }) => confirmed) }
  ];

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'confirmed',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };


  return (
    <Line {...config}/>
  )

}

export default Chart;