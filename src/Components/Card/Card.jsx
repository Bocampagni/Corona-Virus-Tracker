import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Styles from './Card.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{


    if(!confirmed){
        return 'Loading...'
    }

    return(
        <div className = {Styles.container} >
            <Grid container spacing={3} justify = "center" >
                <Grid item component = {Card}  className={cx(Styles.card, Styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={3.5}
                            separator=","
                        />
                        <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant= 'body2'> Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify = "center" >
            <Grid item component = {Card} className={cx(Styles.card, Styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={3.5}
                            separator=","
                        />
                        <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant= 'body2'> Number of recoveries from COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify = "center" >
            <Grid item component = {Card}  className={cx(Styles.card, Styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={3.5}
                            separator=","
                        />
                        <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant= 'body2'> Number of deaths caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}



export default Cards