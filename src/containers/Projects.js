import React, { useState } from 'react'
import { Typography } from '@material-ui/core'

function Projects() {
    const [activeProject, setActiveProject] = useState(null)
    return <div>
        <Typography variant='h4' >Portfolio</Typography>
        <Typography variant='subtitle1' gutterBottom>Projects, Sites and Stuff I've worked on.</Typography>

    </div>
}

export default Projects