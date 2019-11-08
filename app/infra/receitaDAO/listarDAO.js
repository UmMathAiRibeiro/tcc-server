function listarDAO(conection) {
    this._conection = conection;
}
listarDAO.prototype.listarReceitas = function (callback) {
    this._conection.query('SELECT * FROM receita,ingrediente', callback)
} //select ingrediente.id as ingrediente_id,receita.id as receita_id, receita.nome,receita.modo_preparo,receita.calorias, ingrediente.nome,ingrediente.cal_p_und,ingrediente.tipo_und,receita_aux.qtde 
// from ingrediente inner join receita_aux on receita_aux.id_ingrediente = ingrediente.id
// inner join receita on receita_aux.id_receita = receita.id

module.exports = function () {
    return listarDAO;
}