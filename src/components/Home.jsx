import React, { useEffect } from 'react';
import axios from 'axios';
import { useData } from '../store';
import Table from './Table';
import { rebuildData } from './utils';
import Player from './Player';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const [state, dispatch] = useData();

    const history = useHistory();

    const { selectedPlayers } = state;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json');
            rebuildData(response.data);
            dispatch({ type: 'updateData', payload: response.data })
        }
        fetchData();
    } ,[dispatch]);

    const handleClick = () => {
        // window.localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
        if (selectedPlayers.length < 9) {
            alert('please select 9 players');
        }
        history.push('/result');
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
