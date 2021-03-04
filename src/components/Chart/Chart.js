import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'


const Chart = ( { data: { confirmed, deaths, recovered }, country } ) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchMyAPI();
  });

  const lineChart = (
    dailyData.length
    ?
    (
      <Line 
      data={{
        labels: dailyData.reverse().map(({date}) => new Date(date).toLocaleDateString()),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill:true,
        },
        {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill:true,
        }],
      }}/>
    ) : null
  )

  const barChart = (
    confirmed
    ? 
    (
      <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            background: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data:[confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false},
          title: {display: true, text:`Current state in ${country}`}
        }}
      />
    ) : null
  )

  return (
    <div className="chart">
      {country ? barChart : lineChart}
    </div>
  )

}

export default Chart;