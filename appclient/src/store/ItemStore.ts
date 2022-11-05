//@ts-nocheck
import { makeAutoObservable } from "mobx";
import {IType} from "../interfaces/IType";
import {IBasket, IItem} from "../interfaces/IItem";

export default class ItemStore {
    constructor() {
        this._types = []
        this._items = []
        this._selectedType = {}
        this._basket = []
        makeAutoObservable(this)
    }

    setTypes(types: IType[]) {
        this._types = types
    }
    setItems(items: IItem[]) {
        this._items = items
    }
    setSelectedType(type: IType) {
        this._selectedType = type
    }
    setBaskets(basket: IBasket){
        this._basket = basket
    }

    get basket() {
        return this._basket
    }

    get types() {
        return this._types
    }
    get items() {
        return this._items
    }
    get selectedType() {
        return this._selectedType
    }
}
