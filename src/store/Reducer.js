const Reducer = (state, action) => {
    switch (action.type) {
        case 'updateData':
            return {
                ...state,
                data: [ ...action.payload ]
            };
        case 'selectPlayer':
            return {
                ...state,
                selectedPlayers: [ ...state.selectedPlayers, action.payload ]
            };
        case 'updatePlayers':
            return {
                ...state,
                selectedPlayers: [ ...action.payload ]
            }
       
        default:
            return state;
    }
};

export default Reducer;