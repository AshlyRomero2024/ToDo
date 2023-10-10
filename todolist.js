const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Configura el motor de plantillas EJS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

app.post('/addTask', (req, res) => {
    const description = req.body.description;
    tasks.push(description);
    res.redirect('/');
});

app.get('/deleteTask/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
