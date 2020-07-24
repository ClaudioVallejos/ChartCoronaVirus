import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css'
//contador hacia arriba de numeros
import CountUp from 'react-countup'
//para colocar multiples estilos a los classnames se importa una propiedad de clasName
import cx from 'classnames'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading...'
    }
    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify= "center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infectados</Typography> 
                       <Typography variant="h5">
                            <CountUp start= {0} end = {confirmed.value} duration= {1} separator=","/>   
                        </Typography> 
                       <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography> 
                       <Typography variant="body2">Numero de casos activos de covid</Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recuperados</Typography> 
                       <Typography variant="h5">
                            <CountUp start= {0} end = {recovered.value} duration= {1} separator=","/> 
                        </Typography> 
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Numero de casos recuperados de covid</Typography> 
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Muertos</Typography> 
                        <Typography variant="h5">
                            <CountUp start= {0} end = {deaths.value} duration= {1} separator=","/> 
                        </Typography> 
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero muertes por covid</Typography> 
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards