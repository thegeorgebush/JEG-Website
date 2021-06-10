import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Welcome to JEG</h1>
            <Button className={classes.homeButton} component={Link} to="/products" size="large" type="button" variant="contained" color="primary">Enter Nirvana</Button>
        </div>
    )
}

export default LandingPage
