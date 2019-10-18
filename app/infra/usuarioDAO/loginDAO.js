function loginDAO(conection) {
    this._conection = conection;
}
loginDAO.prototype.login = function (data, callback) {
    this._conection.query('SELECT count(*) as count FROM user WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
};
loginDAO.prototype.dados = function (data, callback) {
    this._conection.query('SELECT * from user WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
};
module.exports = function () {
    return loginDAO;
};