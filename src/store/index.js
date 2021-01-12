import React, { createContext, useContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    data: [],
    selectedPlayers: []
};

export const useData = () => {
    return useContext(Context);
}

const Store = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export const Context = createContext(initialState);
export default Store;
