var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var cadastrarIngrediente = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var receitaDAO = new app.infra.receitaDAO.ingredienteDAO(conection);
        var data = req.body;
        receitaDAO.cadastrarIngrediente(data, function (err, result) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                res.json({
                    status: 200
                });
                conection.end();
            }
        });

    };
    app.post(rota.adicionarIngredientes, cadastrarIngrediente);
};