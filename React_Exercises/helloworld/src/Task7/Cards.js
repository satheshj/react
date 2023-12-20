import React from 'react'
import { Card } from 'react-bootstrap'
import './Cards.css'

function Cards() {
    return (
        <>
        <h1 style={{textAlign:"center"}}>Learn 4.0 Technologies</h1>
            <div className='containerCard'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Data Scientist</Card.Title>

                            <Card.Text>
                                Data Scientist handle with data and they contribute in artificial intelligence
                            </Card.Text>
                            <Card.Img src='logo512.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>IOT developer</Card.Title>

                            <Card.Text>
                                IOT developer stands for Internet of Things developer and they develop IOT products
                            </Card.Text>
                            <Card.Img src='logo512.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>VR Developer</Card.Title>
                            <Card.Text>
                                VR developer stands for Virtual Reality Developer and they develop applications for virtual reality
                            </Card.Text>
                            <Card.Img src='logo512.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>ML Engineer</Card.Title>

                            <Card.Text>
                                ML Engineer stands for Macchine Learning Engineer. They buid models and develop bots
                            </Card.Text>
                            <Card.Img src='logo512.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Cards
