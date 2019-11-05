var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var deletar = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var deletarDAO = new app.infra.integranteDAO.deletarDAO(conection);
        var data = req.params;
        deletarDAO.deletarIntegrante(data.id, function (err, result) {
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
    app.delete(rota.deletarIntegrantes, deletar)
};