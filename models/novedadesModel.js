const async = require('hbs/lib/async');
const { isAsyncFunction } = require('util/types');
var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades order by id desc';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj){
    try{
        var query="insert into novedades set ?";
        var rows=await pool.query(query,[obj])
        return rows;

    } catch(error){
        console.log(error);
        throw error;
    }
    }
    async function deleteNovedadesById(id){
        var query='delete form novedades where id=?';
        var rows=await pool.query (query,[id]);
        return rows;
    }
    async function getNovedadesById(id){
        var query='select * form novedades where id=?';
        var rows=await pool.query (query,[id]);
        return rows[0];
         }

    async function modificarNovedadByid(obj,id){
        try {
            var query="update novedades set ? where id=?";
            var rows=await pool.query(query,[obj,id]);
            return rows;
        }catch(error){
            throw error;
        }
            
module.exports = { getNovedades,insertNovedad,deleteNovedadById,getNovedadById,modificarNovedadById}
    }