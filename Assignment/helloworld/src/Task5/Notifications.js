import React from 'react'
import Button from 'react-bootstrap/Button';
function Notifications() {
    return (
        <div className='container'>
            <h1>Notifications</h1>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Information message
                </Button>

                <Button variant="success" size="lg">
                    Success message
                </Button>

                <Button variant="warning" size="lg">
                    Warning message
                </Button>

                <Button variant="danger" size="lg">
                    Error message
                </Button>
            </div>



        </div>
    )
}

export default Notifications
