export {};
const {Type} = require('../items/item')

class TypeController {
    async create(req: {body: {name: string}}, res: any) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req: any, res: any) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()
