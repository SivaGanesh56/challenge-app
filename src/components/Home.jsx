import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useData } from '../store';
import Table from './Table';
import Player from './Player';
import { rebuildData, API } from './utils';

const Home = () => {

    const [state, dispatch] = useData();

    const history = useHistory();

    const { selectedPlayers } = state;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            rebuildData(response.data);
            dispatch({ type: 'updateData', payload: response.data })
        }
        fetchData();
    } ,[dispatch]);


    const handleClick = () => {
        if (selectedPlayers.length < 9) {
            alert('please select 9 players');
        } else {
            try{
                // window.localStorage.clear("selectedPlayers");
                window.localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
            } catch(err) {
                console.log('Failed to save in local storage');
            }
            history.push('/result');
        }
    }

    return (
        <div className="row">
            <div className="col-2 sidebar">
                <h5>Playing 9</h5>
                <button 
                    className='btn btn-primary start-button'
                    onClick={handleClick}
                >
                Start
                </button>
                {
                    selectedPlayers.map(player => {
                        return (
                            <Player
                            key={player.id}
                            isPreview={true}
                            { ...player }
                            />
                        );
                    })
                }
            </div>
            <div className="col-10 mainbar">
                <h3>Select Playing 9</h3>
                <Table />
            </div>
        </div>
    );
}

export default Home;
