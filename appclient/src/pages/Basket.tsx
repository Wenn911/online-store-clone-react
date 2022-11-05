import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {deleteAllFromBasket, deleteFromBasket, getBasket} from "../api/itemApi";
import {observer} from "mobx-react-lite";
import {Button, Card, CloseButton, Image} from "react-bootstrap";
import {IItem} from "../interfaces/IItem";

const Basket = observer(() => {
    const {item} = useContext(Context)
    console.log(item.basket)

    useEffect(() => {
        getBasket().then(data => {
            item.setBaskets(data)
        })
    }, [item])

    const handleDeleteItem = (id: number) => {
        deleteFromBasket(id).then(response => window.location.reload())
    }
    const handleDeleteAll = () => {
        deleteAllFromBasket().then(response => window.location.reload())
    }

    let prices = 0;
    {item.basket.map((price: {item: {price: string}}) => {
        const numPrice = Number(price.item.price.replace('₽', '').replace( /\s/g, ''))
        prices += numPrice
    })}

    return (
        <div>
            <div className='double-lines basket-title-size text-center'>КОРЗИНА</div>
            {item.basket.map((i: {item: IItem, id: number}) =>
                <Card.Body key={i.item.id} className='pt-3'>
                    <div className='d-flex'>
                        <Image width={136} height={136} src={process.env.REACT_APP_API_URL + i.item.img} />
                        <p className='fw-bold m-5'>{i.item.name}</p>
                        <div className='m-5'>{i.item.price}</div>
                        <CloseButton className='m-5' onClick={() => handleDeleteItem(i.id)}/>
                    </div>
                </Card.Body>
            )}
            <div className='float-end sum'>{`Итого: ${prices} ₽`}</div>
            <div className='basketButtons'>
                <Button variant='secondary' className='' onClick={() => handleDeleteAll()}>Очистить корзину</Button>
                <Button variant='dark' className='float-end' onClick={() => alert('Халява скам скам')}>Оформить заказ</Button>
            </div>
        </div>

    );
});

export default Basket;
