import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Book from './Book';

function BookForm({setBook}) {
    
    const [response, setResponse] = useState()

    const updateField = (e) => {
        setResponse ({
            ...response,
            [e.target.name]: e.target.value
        })
        console.log(response)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // let updateContentArr = [
        //     ...content, response];
    setBook({response})
    //         if (response.title) {
    //             dispatch(addContent(updateContentArr))
    //             setResponse({}) // empty the field after submit.
    //         }
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
