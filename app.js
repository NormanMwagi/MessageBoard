const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000;

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require('./routes/messageRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})

