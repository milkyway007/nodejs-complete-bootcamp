const express = require("express");
const app = express();
const PORT = 4000;

function log(response, request, next) {
    console.log('[Logged]')

    console.log('[Logging code 1]')
    console.log('[Logging code 2]')
    console.log('[Logging code 3]')

    next();
}

app.use(log);

app.get('/', (request, response) => {
    response.send('ROOT');
});

app.get('/login', (request, response) => {
    response.send('LOGIN');
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
