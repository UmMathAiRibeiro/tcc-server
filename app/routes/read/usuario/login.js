var rota = require('../../rotas.json').rotas;
module.exports = function (app) {
    var login = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var loginDAO = new app.infra.usuarioDAO.loginDAO(conection);
        var data = req.body;
        loginDAO.login(data, function (err, logado) {
            if (err) {
                res.json({
                    status: 500,
                    err: err
                });
                console.log(err);
                conection.end();
            } else {
                console.log();
                if (logado[0].count != 0) {
                    loginDAO.dados(data, function (err, dados) {
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
                                iduser: dados[0].id,
                                nome: dados[0].nome,
                                usuario: dados[0].usuario,
                                email: dados[0].email,
                                logado: logado
                            });
                            conection.end();
                        }
                    });
                } else {
                    res.json({
                        status: 200,
                        errado: "Conta inexistente ou senha e/ou email errados"
                    });
                    conection.end();
                }
            }
        });
    };
    app.post(rota.loginUsuario, login);
};