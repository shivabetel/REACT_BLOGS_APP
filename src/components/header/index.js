import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';

const Header = props => {
    const { classes } = props;
    return (
        <div className={classes.flexContainer}>
                <div className={classes.logoContainer}>My Blogs</div>
                {/* <div className={classes.headerLinkCon}>Links</div> */}
        </div>
    )
}


export default withStyles(styles)(Header);