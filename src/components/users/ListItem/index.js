import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style'

const ListItem = props => {

    const { labelValue = [], right, classes } = props;


    return (
        <div className={classes.container}>
            <div className={classes.left}>
            {
                labelValue.map(item => {
                    return (
                        <div>

                        <div className={classes.inlineBlock}>
                            <span> {item.label} </span>
                        </div>
                        <div className={classes.inlineBlock}>
                            <span>{item.value}</span>
                        </div>
    
    
                    </div>
                    )
                })
            }
            </div>
            <div>
                {right}
            </div>


        </div>
    )






                {/* <Link to={{
                pathname: `/users/${id}/posts`,
                search: '',
                hash: ''
            }}>View Posts</Link> */}

}


export default withStyles(styles)(ListItem);