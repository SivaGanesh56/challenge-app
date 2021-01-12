import React, { useEffect, useState } from 'react';
import Player from './Player';

const Result = () => {

    let players = [];
    try {
        players = JSON.parse(window.localStorage.getItem('selectedPlayers'));
    } catch (error) {
        console.log('unable to get data from local storage');
    }
    
    const [bet, setBet] = useState(0);
    const [index, setIndex] = useState(-1);

    function generateBet() {
        const oppositeBet = Math.floor((Math.random()*10) + 1);
        setBet(oppositeBet);
        return players.findIndex((player) => player.Bet == oppositeBet);
    }

    useEffect(() => {
        let index = generateBet();
        while (index < 0) {
            index = generateBet();
        }
        setIndex(index);
    },[]);


    return (
        <div className="result-page">
            <h2>Opposite Bet: {bet}</h2>
            <div className="row">
            {
                players.map((player, indx) => {
                    return (
                        <Player
                            key ={player.id}
                            status = { index === indx }
                            {...player}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default Result;
