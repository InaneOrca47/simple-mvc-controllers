const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

// compress and decompress all requests and responses
app.use(compression());
// static file hosting
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
// no more favicon issues
app.use(favicon(`${__dirname}/../client/img/favicon.png`));

// query or body parameters are auto parsed for url encoded
app.use(express.urlencoded({ extended: true }));
// query or body parameters are auto parsed for JSON
app.use(express.json());

// hook up router
router(app);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
})

