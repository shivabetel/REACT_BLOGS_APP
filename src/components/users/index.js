import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import ListItem from './ListItem'

const User = props => {

    const { id, name, email, address, classes } = props;

    const { street = '', suite = '', city = '', zipcode = '' } = address;


    const derviedAddress = street.concat(street, suite, city, zipcode);

    const history = useHistory();
    const location = useLocation();

    console.log("location",location);

    const labelValue = [
        {
            label: 'Name: ',
            value: name
        },
        {
            label: 'Email ID: ',
            value: email
        },
        {
            label: 'Address: ',
            value: derviedAddress
        }
    ]

    const handleViewPostsClick = () => {
        history.push(`${location.pathname}/${id}/posts`);
    }


    return (
       
           <div>
             <ListItem labelValue={labelValue}
                      right={
                          <Button variant="contained"
                                  color="primary"
                                  onClick={handleViewPostsClick}>View Posts</Button>
                      }/>
           </div>
    )

}


export default User