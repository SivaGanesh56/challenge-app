import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useData } from '../store'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const [state, dispatch] = useData();

    const { selectedPlayers = [] } = state || {};

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
