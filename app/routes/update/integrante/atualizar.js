var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var atualizar = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var atualizarDAO = new app.infra.integranteDAO.atualizarDAO(conection);
        var data = req.body;
        atualizarDAO.atualizarIntegrante(data, function (err, result) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                res.json({
                    status: 200,
                    result: result
                });
                conection.end();
            }
        });
    };
    app.put(rota.atualizarIntegrante, atualizar)
};