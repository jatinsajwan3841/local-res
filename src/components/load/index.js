import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
    },
}))

export default function LinearIndeterminate() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    )
}
