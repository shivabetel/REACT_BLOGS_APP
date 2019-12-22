import React from 'react';
import Header from '../header';
import { styles } from './style';

import { withStyles } from '@material-ui/core/styles'

const Layout = props => {

    const { classes } = props;
    return (
        <div className={classes.flexContainer}>
            <div>
            <Header/>
            </div>
            <div className={classes.mainContainer}>
                {props.children}
            </div>
        </div>
    )
}


export default withStyles(styles)(Layout);