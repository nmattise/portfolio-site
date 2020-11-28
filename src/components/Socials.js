import React from 'react'
import { socials, quotes } from '../data'
import { Avatar, Grid, Link, Tooltip, Typography } from '@material-ui/core'

function SocialLinks(props) {
    return <Grid container direction='row' spacing={3} justify='center'>
        {(socials).map(social => {
            return <Grid item >
                <Tooltip key={social.id} title={social.title}>
                    <Link href={social.link} color='inherit'>
                        {social.icon}
                        {/* <Typography variant='subtitle1' align='center'>{social.title}</Typography> */}
                    </Link>

                </Tooltip>
            </Grid>
        }
        )}
    </Grid>
}

function Quotes() {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    return <Typography gutterBottom align='center' variant='caption'><span style={{ fontStyle: 'italic' }}>"{quote}"</span> -N.W.Mattise</Typography>
}
export { SocialLinks, Quotes }