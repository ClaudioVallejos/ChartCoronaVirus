import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'

const Charts = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

   useEffect(() => {

        const fetchAPI = async () => {
           setDailyData(await fetchDailyData());
        }
        fetchAPI();
   }, []);

   const lineChart = (
        dailyData.length !== 0
        ? (
            <Line 
                data = {{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infectados',
                        borderColor: 'rgba(14, 14, 172, 0.822)',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Muertes',
                        borderColor: 'red',
                        backhgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],   
                }}
       />):null
   );
    console.log(confirmed, recovered, deaths)

   const barChart = (
       confirmed
       ? (
           <Bar
           data={{
                labels: ['Inefectados', 'Recuperados', 'Muertos'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(14, 14, 172, 0.822)',
                        'rgba(13, 214, 47, 0.822)',
                        'rgba(219, 15, 15, 0.822)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
            }}  
           options={{
               legend: {display: false},
               title: {display: true, text: `Pais acutal ${country}`}
            }}
           >
               
           </Bar>
       ): null
   )

    return (
        <div  className= {styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts