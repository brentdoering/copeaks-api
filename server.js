const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5001;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Colorado 14er API' });
});

const fourteenersRouter = require('./routes/fourteeners');
app.use('/api/14ers', fourteenersRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));