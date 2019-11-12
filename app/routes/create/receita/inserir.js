var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var addReceita = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var receitaDAO = new app.infra.receitaDAO.adicionarDAO(conection);
        var data = req.body;
        var data2 = {
            id_receita: data.id_receita,
            id_ingrediente: null,
            qtde: null
        }
        var error = "nada";
        receitaDAO.addReceita(data, function (err, result) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                data.ingredientesEmUso.forEach(ingrediente => {
                    data2.id_ingrediente = ingrediente.id
                    data2.qtde = ingrediente.qtde
                    receitaDAO.addReceitaAux(data2, function (erro, result) {
                        if (erro) {
                            error = erro
                        }
                    })
                });
                if (error != "nada") {
                    res.json({
                        status: 500,
                        err: error
                    });
                    console.log(error);
                    conection.end();
                } else {
                    res.json({
                        status: 200
                    });
                    conection.end();
                }
            }
        });

    };
    app.post(rota.adicionarReceitas, addReceita);
};