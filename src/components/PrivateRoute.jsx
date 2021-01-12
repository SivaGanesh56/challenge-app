import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    let selectedPlayers = [];
    try {
        selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers'));
    } catch (error) {
        console.log('unable to get data from localstorage')
    }

    return (
        <Route
            {...rest}
            render={props => {
                return selectedPlayers.length === 9 ? <Component { ...props }/> : <Redirect to="/"/>
            }}
        >

        </Route>
    );
}

export default PrivateRoute;
