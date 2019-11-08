var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var listar = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var ingredienteDAO = new app.infra.receitaDAO.ingredienteDAO(conection);
        ingredienteDAO.listarIngredientes(function (err, result) {
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
    app.get(rota.selecionaIngredientes, listar)
};