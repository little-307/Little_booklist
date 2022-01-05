import React from 'react';
import { Card } from 'react-bootstrap';

function Book({book}) {
        console.log(book.response)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.response.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.response.author}</Card.Subtitle>
                    <Card.Text >
                    {book.response.synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Book
