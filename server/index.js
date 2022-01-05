import express from 'express';


const app = express();

const PORT = 5000;


// set up route
// GET
app.get('/get', (req, res) => {
    res.send("GET displayed");
    console.log('successful Get');
})

// POST
app.post('/post', (req, res) => {
    res.send("POST saved");
    console.log("successful Post")

    })


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));