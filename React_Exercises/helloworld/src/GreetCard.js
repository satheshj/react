import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function GreetCard() {
    let imgSrc = "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png";
    return (
        <>
            <Card style={{ width: '18rem' }} className='CardGreet'>
                <Card.Body>
                    
                    <img src={imgSrc} alt='image not found'></img>
                    <Card.Title>Kiran V</Card.Title>
                    <Card.Text>
                        Intitute of Technology
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default GreetCard
