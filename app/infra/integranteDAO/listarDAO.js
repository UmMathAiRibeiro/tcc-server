function listarDAO(conection) {
    this._conection = conection;
}
listarDAO.prototype.listarIntegrantes = function (data, callback) {
    this._conection.query('SELECT * FROM integrante WHERE iduser=?',
        [data.iduser], callback)
}
module.exports = function () {
    return listarDAO;
}