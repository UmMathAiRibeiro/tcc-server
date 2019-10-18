var app = require('./config/express');
app().listen(3005, () => {
    console.log('Server FamiliaSaudavel na porta 3005');
});