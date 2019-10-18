var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var cadastro = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var cadastroDAO = new app.infra.usuarioDAO.cadastroDAO(conection);
        var data = req.body;
        cadastroDAO.verificaEmail(data, function (err, verificaEmail) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                console.log();
                if (verificaEmail[0]['count(*)'] === 0) {
                    cadastroDAO.cadastro(data, function (err, result) {
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
                } else {
                    res.json({
                        status: 200,
                        email: "Email já está em uso"
                    });
                    conection.end();
                }
            }
        });
    };
    app.post(rota.cadastroUsuario, cadastro);
};