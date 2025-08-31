const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})

