import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { contentReducer } from '../state/bookSlice';

function BookForm() {
    const dispatch = useDispatch();
    
    const [response, setResponse] = useState()

    const updateField = (e) => {
        setResponse ({
            ...response,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     
            if (response.title) {
                dispatch(contentReducer(response))
                setResponse({}) // empty the field after submit.
                
            }
            e.target.title.value = ""
            e.target.author.value = ""
            e.target.synopsis.value = ""
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" name="title" onChange={updateField}/>
                </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" name="author" onChange={updateField}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Synopsis</Form.Label>
                    <Form.Control as="textarea" rows={3} name="synopsis" onChange={updateField}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default BookForm
