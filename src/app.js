const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log(res.statusCode); 
})

app.get('/logout', (req, res) => {
    res.send('will log out');

})


app.post('/', (req, res)=>{
    console.log(res.statusCode);
    if(res.statusCode == 200) {
        res.send('Posted to / \n');
    }
});


const server = app.listen(3001, () => {
    console.log('running on 3001');
})

