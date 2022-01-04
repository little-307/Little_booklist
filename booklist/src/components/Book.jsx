import React from 'react';
import { Card } from 'react-bootstrap';

function Book() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>To Kill A Mockingbird</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Harper Lee</Card.Subtitle>
                    <Card.Text>
                    Boo, Scout, and Gregory play in a tree house and I believe the court gets involved.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Book
