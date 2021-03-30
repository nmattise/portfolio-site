import React from 'react'
import { Typography, Grid, Avatar, makeStyles } from '@material-ui/core'
import { Domain, BarChart, Code } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const skills = {
    'development': {
        title: 'Software Development',
        color: '#607d8b',
        image: '',
        icon: <Code />,
        // description: `Heavy user of the MEAN Stack (MongoDB, ExpressJS, AngularJS, and Node.JS) to build everthing from basic file servers, to real time data apps, to multi-user simulation platforms.`
    },
    'data': {
        title: 'Data Science',
        color: '#3f51b5',
        image: '',
        icon: <BarChart />,
        // description: `Experienced in the building of physics based energy models using both the OpenStudio GUI and SDK, with additional experience into the inner workings of EnergyPlus.`
    },
    'modeling': {
        title: 'Energy Modeling',
        color: '#4caf50',
        image: '',
        icon: <Domain />,
        // description: `Experienced in the building of physics based energy models using both the OpenStudio GUI and SDK, with additional experience into the inner workings of EnergyPlus.`
    },
}

function Skills() {
    const classes = useStyles();
    return <div>
        <Typography variant='h4' >Skills</Typography>
        <Typography variant='subtitle1' gutterBottom>Expertise, Research, and Knowledge</Typography>

        <Grid container direction='column' spacing={2}>
            {Object.entries(skills).map(([key, skill], i) => {

                return <Grid item container direction={i % 2 ? 'row-reverse' : 'row'} spacing={1} key={key}>
                    <Grid item xs={12} sm={3} container direction='row' justify='center' alignItems='center'>
                        <Avatar style={{ backgroundColor: skill.color }} className={classes.large}>{skill.icon}</Avatar>
                    </Grid>
                    <Grid item xs={12} sm={9} >
                        <Typography variant='h5'>{skill.title}</Typography>
                        <Typography variant='body2'>
                            {skill.description}
                        </Typography>
                    </Grid>


                </Grid>
            })}

        </Grid>
    </div>
}

export default Skills