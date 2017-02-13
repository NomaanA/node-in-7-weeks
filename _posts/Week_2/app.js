const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(__dirname);
})

app.get('/logout', (req, res) => {
    res.send('will log out');
})



app.post('/', (req, res)=>{
    res.send('Posted to / \n');
});


const server = app.listen(3001, () => {
    console.log('running on 3001');
})

