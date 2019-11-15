var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var contar = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var contarDAO = new app.infra.receitaDAO.contarDAO(conection);
        contarDAO.contarReceitas(function (err, result) {
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
    app.get(rota.contarReceitas, contar)
};