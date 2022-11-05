export {};
const uuid = require('uuid')
const path = require('path')
const {Item, ItemInfo} = require('../items/item')
const ApiError = require('../error/ApiError')

interface IItemController {
        body: {
            name: string,
            price: string,
            typeId: number,
            desc: { description: string }[]
        }
        files: {
            img: string | any
            backImg: string | any
        }
}

class ItemController {
    async create(req: IItemController, res: any, next: any) {
        try {
            let {name, price, typeId, desc} = req.body
            const {img, backImg} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            backImg.mv(path.resolve(__dirname, '..', 'static', filename))
            const item = await Item.create({name, price, typeId, img: filename, backImg: filename})

            if (desc) {
                // @ts-ignore
                desc = JSON.parse(desc)
                desc?.forEach(i =>
                    ItemInfo.create({
                        description: i.description,
                        itemId: item.id
                    })
                )
            }
            return res.json(item)
        } catch (e: any | unknown) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req: {query: {typeId: number} }, res: any) {
        const { typeId } = req.query
        let items;
        if (!typeId) {
            items = await Item.findAll()
        }
        if(typeId) {
            items = await Item.findAll({where: {typeId}})
        }
        return res.json(items)
    }
    async getOne(req: {params: { id: number }}, res: any) {
        const {id} = req.params
        const item = await Item.findOne({
            where: {
                id
            },
            include: [{model: ItemInfo, as: 'desc'}]
        })
        return res.json(item)
    }
}

module.exports = new ItemController()
