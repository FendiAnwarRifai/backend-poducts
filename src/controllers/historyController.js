const model = require('../models/index')
const Sequelize = require('sequelize')
const helper = require('../helpers/help')
const Op = Sequelize.Op
const products = {
    view: (req, res) => {
        model.item_histories.findAll({
            where: {
                item_id: req.query.item_id
            }
        }).then((result) => {
            model.items.findAll({
                where: {
                    id: req.query.item_id
                }
            }).then((result2) => {
                return helper.response('success', res, result, 200, result2)
            })
            
        }).catch((err) => {
            return helper.response('error', res, null, 401, err)
        })
    },
     create: (req, res) => {
         const id = req.query.item_id
        const data = req.body
        stock_awal = []
        model.items.findAll({
            where: {
                id: id
            }
        }).then((result)=>{
            stock_awal.push(result[0].stock)
        })
        setTimeout(() => {
            let stock = ''
            if (data.type == '0') {
                if (parseInt(data.amount) > parseInt(stock_awal[0])) {
                    return helper.response('error', res, null, 401, "pengurangan terlalu melampui batas stock awal")
                }
                else {
                    const all_stock = parseInt(stock_awal[0]) - parseInt(data.amount)
                    stock = all_stock
                }
            } 
           else if (data.type == '1') {
                const all_stock = parseInt(stock_awal[0]) + parseInt(data.amount)
                 stock = all_stock
                
            }
            data.item_id = id
            data.createdBy = req.users.userId
            model.item_histories.create(data)
             .then((result) => {
                 const items_data = {
                     stock: stock
                 }
                 model.items.update(items_data, {
                     where: {
                         id: result.item_id
                     }
                 })
                 return helper.response('success', res, result, 200, 'products created successfully')
             })
             .catch((err) => {
                 return helper.response('error', res, null, 401, err)
             })
            
        }, 100);
     }
}
module.exports = products