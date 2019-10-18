function cadastroDAO(conection) {
    this._conection = conection;
}
cadastroDAO.prototype.verificaEmail = function (data, callback) {
    this._conection.query('SELECT count(*) FROM user WHERE email = ?',
        [data.email], callback);
};
cadastroDAO.prototype.cadastro = function (data, callback) {
    this._conection.query('INSERT INTO user VALUES (DEFAULT, ?, ?, ?, sha2(?, 512))',
        [data.nome, data.user, data.email, data.senha], callback);
};
module.exports = function () {
    return cadastroDAO;
};