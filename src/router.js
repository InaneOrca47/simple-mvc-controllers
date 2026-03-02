const controllers = require('./controllers'); // importing index.js

const router = (app) => {
    // html pages
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);
    app.get('/', controllers.index);

    // get name
    app.get('/getName', controllers.getName);

    // catches the rest
    app.get('/*wild', controllers.notFound);

    // POST Requests
    app.post('/setName', controllers.setName);
};

module.exports = router;
