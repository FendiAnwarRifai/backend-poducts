const model = require('../models/index')
const Sequelize = require('sequelize')
const helper = require('../helpers/help')
const Op = Sequelize.Op
const products = {
    view: (req, res) => {
        model.items.findAll().then((result) => {
            return helper.response('success', res, result, 200, 'show all products successfully')
        })
            .catch((err) => {
                return helper.response('error', res, null, 401, err)
            })
    },
    create: (req, res) => {
        const data = req.body
        const code = []
         model.items.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('code')),'count'],
            ]
        }).then((result2)=>{
            return code.push(result2[0].dataValues.count)
        })
        setTimeout(() => {
            data.code = "BRG-"+(code[0]+1)
            data.createdBy = req.users.userId

            // return console.log(data);
            
             model.items.create(data)
            .then((result) => {
                const histories = {
                    item_id: result.id,
                    type:1,
                    amount:result.stock,
                    createdBy: result.createdBy
                }
                model.item_histories.create(histories)
                return helper.response('success', res, result, 200, 'products created successfully')
            })
            .catch((err) => {
                return helper.response('error', res, null, 401, err)
            })
        }, 100);
       
    },
    update: (req, res) => {
        let data = req.body
        data.updatedBy = req.users.userId
        data.updatedAt = Date.now()
        data = JSON.parse(JSON.stringify(data))
        if (data.name === "" || data.stock === "") {
            return helper.response('warning', res, null, 401, 'form cannot be empty')
        }
        model.items.update(data, {
            where: {
                id: data.id
            }
        }).then(result => {
            if (result[0] === 0) {
                return helper.response('warning', res, null, 401, 'Id Not Found')
            }
            return helper.response('success', res, result[0], 200, 'data was updated successfully')
        })
            .catch((err) => {
                return helper.response('error', res, null, 401, err)
            })
    },
    delete: (req, res) => {
        const productId = req.params.id
        model.items.destroy({
            where: {
                id: productId
            }
        })
            .then((result) => {
                if (result === 0) {
                    return helper.response('success', res, null, 200, 'Id Not Found')
                }
                return helper.response('success', res, result, 200, 'data deleted successfully')
            })
            .catch((err) => {
                return helper.response('error', res, null, 401, err)
            })
    }
}
module.exports = products