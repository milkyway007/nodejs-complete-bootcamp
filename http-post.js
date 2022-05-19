const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.post('/movies', (request, response) => {
    const title = request.body.title;
    const year = request.body.year;
    const revenue = request.body.revenue;

    console.log(title);
    console.log(year);
    console.log(revenue);

    response.send('OK');
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});