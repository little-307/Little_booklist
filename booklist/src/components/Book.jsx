import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectContent } from '../state/bookSlice';

function Book() {
        
    const book = useSelector(selectContent)
    console.log(book)
    return (
        <div>
            {book.map((info, i) => (
            <Card style={{ width: '18rem' }} key={i}>
                <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{info.author}</Card.Subtitle>
                    <Card.Text >
                    {info.synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
            ))}
        </div>
    )
}

export default Book
