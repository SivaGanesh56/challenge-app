import React from 'react';
import { Card } from 'react-bootstrap';

const Player = (props) => {

    const { Name, Price, Bet, status = false, isPreview = false } = props;

    let mainClass = "result-card";
    mainClass = status ? mainClass + " winner" : mainClass;
    mainClass = isPreview ? mainClass + " preview" : mainClass;

    return (
        <div className={mainClass}>
            <Card>
                <Card.Img src={props['Profile Image']} alt="profile-image"/>
                <Card.Title>{Name}</Card.Title>
                <Card.Subtitle>
                    <div className="row card-content">
                    <p><span><i class="fas fa-trophy"></i></span> {Price}</p>
                    <p><i class="fas fa-certificate"></i> {Bet}</p>
                    </div>
                </Card.Subtitle>
                {
                    !isPreview ?
                    <Card.Footer style={{color: status ? 'blue': 'black'}} >{status ? 'WINNER': 'LOSE'}</Card.Footer>
                    : null
                }
            </Card>
        </div>
    );
}

export default Player;
