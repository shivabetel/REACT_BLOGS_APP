import React from 'react';
import { actionGetAllUsers } from '../../actions/users';
import User from '../../components/users';
import ComponentStatesHandler from '../../components/core/component-states-hander';

import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';


class UsersContainer extends React.Component {

    // static getDerivedStateFromProps (props, state) {
    //   console.log("deriveStateFromProps" , props, state);
    // }

    preLoader = () => {
        return (
            <ContentLoader
                height={160}
                width={400}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="10" y="0" rx="3" ry="3" width="100" height="6" />
                <rect x="10" y="20" rx="3" ry="3" width="100" height="6" />
                <rect x="10" y="40" rx="3" ry="3" width="100" height="6" />
                <rect x="200" y="25" rx="3" ry="3" width="50" height="6" />

                <rect x="10" y="70" rx="3" ry="3" width="100" height="6" />
                <rect x="10" y="90" rx="3" ry="3" width="100" height="6" />
                <rect x="10" y="110" rx="3" ry="3" width="100" height="6" />
                <rect x="200" y="90" rx="3" ry="3" width="50" height="6" />
            </ContentLoader>
        )
    }

    componentDidMount() {
        this.props.actionGetAllUsers();
    }


    render() {
        const { users = { data: [] }, isLoading = false } = this.props;
        let renderedComp = null;
        if (!users.data)
            renderedComp = this.preLoader()
        else {
            const { data } = users;
            renderedComp = data.map((user) => {
                return (
                    <User name={user.name}
                        email={user.email}
                        address={user.address}
                        id={user.id} />

                )
            })
        }

        return (
            <div>
                {/* <span>{process.env.REACT_APP_MOCK_MODE}</span> */}
                <h2>USERS</h2>
                <ComponentStatesHandler isLoading={isLoading}
                    preLoader={this.preLoader()}>
                    {renderedComp}

                </ComponentStatesHandler>
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    const { users = {}, isLoading } = state
    return {
        users,
        isLoading
    };
}


export default connect(mapStateToProps, { actionGetAllUsers })(UsersContainer);