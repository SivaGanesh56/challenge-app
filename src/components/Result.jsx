import React, { useEffect, useState } from 'react';
import { useData } from '../store';
import ResultCard from './ResultCard';

const Result = () => {
    
    const [state, dispatch] = useData();

    const [bet, setBet] = useState(0);

    const { selectedPlayers } = state;

    function generateBet() {
        const oppositeBet = Math.floor(Math.random()*10);
        setBet(oppositeBet);
        return selectedPlayers.findIndex((player) => player.Bet == oppositeBet);
    }


    useEffect(() => {
        let index = generateBet();
        while (index < 0) {
            index = generateBet();
        }
        selectedPlayers[index].status = true;
    },[]);

    return (
        <div className="result-page">
            <h2>Opposite Bet: {bet}</h2>
            <div className="row">
            {
                selectedPlayers.map(player => {
                    return (
                        <ResultCard
                            key ={player.id}
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
