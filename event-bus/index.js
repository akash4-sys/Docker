const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
    const event = req.body;

    events.push(event);

    try { await axios.post('http://posts-clusterip-srv:4000/events', event); }
    catch (err) { console.log(err); }
    // try { await axios.post('http://localhost:4001/events', event); }
    // catch (err) { console.log(err); }
    // try { await axios.post('http://localhost:4002/events', event); }
    // catch (err) { console.log(err); }
    // try { await axios.post('http://localhost:4003/events', event); }
    // catch (err) { console.log(err); }

    res.send({status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, ()=>{
    console.log("Listening on port 4005");
});