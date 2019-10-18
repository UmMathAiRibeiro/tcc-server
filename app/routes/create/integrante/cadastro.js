var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var cadastroIntegrante = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var integranteDAO = new app.infra.integranteDAO.cadastroDAO(conection);
        var data = req.body;
        integranteDAO.cadastroIntegrante(data, function (err, result) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                res.json({
                    result: result,
                    status: 200
                });
                conection.end();
            }
        });
    };
    app.post(rota.cadastroIntegrante, cadastroIntegrante);
};