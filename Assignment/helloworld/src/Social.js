import React from 'react'
import Button from 'react-bootstrap/Button';



function Social() {


    return (
        <>
            <h1 style={{color:"black"}}>Social Buttons</h1>

            <Button variant='primary'>Like</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}

        </>
    )
}

export default Social
