import React from 'react';
import { Card } from 'react-bootstrap';

const Player = (props) => {

    const { Name, Price, Bet } = props;

    return (
       <div className="player">
        <Card style={{width: '8rem'}}>
        <Card.Img src={props['Profile Image']} />
        <Card.Header>{Name}</Card.Header>
        </Card>
       </div>
    );
}

export default Player;
