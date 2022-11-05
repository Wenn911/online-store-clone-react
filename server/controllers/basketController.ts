export {};
const { Item, BasketItem } = require('../items/item')

class BasketController {

    async addToBasket(req: {body: {itemId: number}}, res: any) {
        const {itemId} = req.body
        const basket = BasketItem.create({itemId: itemId})
        return res.json(basket)
    }

    async getBaskets(req: any, res: any) {
        const basket = await BasketItem.findAll({
            include: {
                model: Item
            }
        })
        if (!basket) {
            res.status(400).json('None')
        }
        return res.json(basket)
    }

    async deleteBasket(req: {body: {id: number}}, res: any) {
        const { id } = req.body;
        if(!id) {
            res.status(400).json('None Id')
        }
        await BasketItem.destroy({where: {id: id}})
        res.status(200).json('Product deleted')
    }
    async deleteBasketAll(req: any, res: any) {
        await BasketItem.destroy({where: {}})
        res.status(200).json('Basket clear')
    }
}

module.exports = new BasketController()
