import React from 'react'
import { socials, quotes } from '../data'
import { Grid, Link, Tooltip, Typography } from '@material-ui/core'

function SocialLinks() {
    return <Grid container direction='row' spacing={3} justify='center'>
        {(socials).map(social => {
            return <Grid item key={social.id}>
                <Tooltip title={social.title}>
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
    let quote = quotes[Math.floor(Math.random() * quotes.length)]
    return <Typography gutterBottom align='center' variant='caption'><span style={{ fontStyle: 'italic' }}>"{quote?.quote}"</span> -{quote?.source}</Typography>
}
export { SocialLinks, Quotes }