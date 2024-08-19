const {Pool} = require("pg");
const {response} = require("express");

const pool = new Pool({
    user:"postgres",
    password:"123",
    host:"localhost",
    port: 5432,
    database:"clothes",
})

const getHome = () => {
      return new Promise(function(resolve, reject) {
          pool.query('SELECT * FROM clothes LIMIT 3', (error, results) => {
              if (error) {

                  reject(error)
              }

              resolve(results.rows);
          })
      })

}
const getShop = (page, limit, sortBy) => {

    const offset = (page - 1) * limit
    const categoryLink = sortBy>0? `WHERE category_id=${sortBy} `:''


    return new Promise(function(resolve, reject) {

        pool.query('SELECT *, count(*) OVER() totalCount FROM clothes ' + categoryLink+ 'LIMIT $1 OFFSET $2', [limit, offset] , (error, results) => {

            if (error) {
                reject(error)
            }

            resolve(results.rows);
        })
    })

}

const getCloth = (id) => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * from clothes WHERE id=' + id,(error, results) => {
            if (error) {
                reject(error)
            }

            resolve(results.rows);
        })
    })
}

module.exports = {
    getHome,
    getShop,
    getCloth,

};