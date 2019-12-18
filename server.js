const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8888
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api', (req, res) => res.send('Hello World!'))

app.post('/api/user', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let phone = req.body.phone;

    console.log(name,'---',age, '---', phone);

    res.json({id: 1, code: 201, message: 'success!'})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))