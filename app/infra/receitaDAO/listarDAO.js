function listarDAO(conection) {
  this._conection = conection;
}
listarDAO.prototype.listarReceitas = function (callback) {
  this._conection.query("SELECT ingrediente.id as " +
    "ingrediente_id,receita.id as receita_id,receita.nome as nome_receita,receita.modo_preparo,receita.calorias," +
    " ingrediente.nome as nome_ingrediente,ingrediente.cal_p_und,ingrediente.tipo_und,receita_aux.qtde FROM ingrediente" +
    " INNER JOIN receita_aux on receita_aux.id_ingrediente = ingrediente.id INNER JOIN receita on " +
    "receita_aux.id_receita = receita.id", callback);
};

module.exports = function () {
  return listarDAO;
};