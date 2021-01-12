import React from 'react';
import { Card } from 'react-bootstrap';

const ResultCard = (props) => {

    const { Name, Price, Bet, status = false } = props;

    return (
        <div className="result-card" style={{width: status ? '14rem': '11rem'}}>
            <Card>
                <Card.Img src={props['Profile Image']} />
                <Card.Title>{Name}</Card.Title>
                <Card.Body>
                    <h4>Price: {Price}</h4>
                    <h4>Bet: {Bet}</h4>
                </Card.Body>
                <Card.Footer style={{color: status ? 'blue': 'black'}} >{status ? 'WINNER': 'LOSE'}</Card.Footer>
            </Card>
        </div>
    );
}

export default ResultCard;
