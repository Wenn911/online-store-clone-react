import {$authHost, $host} from "./index";
import {IItem} from "../interfaces/IItem";

export const createType = async (type: string) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createItem = async (item: IItem) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}

export const fetchItems = async (typeId: number | null) => {
    const {data} = await $host.get('api/item',{params: {
            typeId
        }})
    return data
}


export const addToBasket = async (itemId: any | null) => {
    const {response}: any = await $host.post('api/basket', itemId)
    return response
}

export const deleteFromBasket = async (id: number | undefined) => {
    const {response}: any = await $host.post('api/basket/delete', {id: id})
    return response
}

export const getBasket = async () => {
    const {data} = await $host.get('api/basket')
    return data
}

export const deleteAllFromBasket = async () => {
    const {response}: any = await  $host.post('api/basket/deleteAll', {})
    return response
}
