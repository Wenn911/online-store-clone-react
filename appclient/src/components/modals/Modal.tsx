import React, { useState} from 'react';
import {Button, Image, Modal} from "react-bootstrap";
import Select from 'react-select'
import {observer} from "mobx-react-lite";
import {addToBasket} from "../../api/itemApi";

const ItemModal = observer(({item, show, onHide}: any) => {
    const [selectedSize, setSelectedSize] = useState<any>(null)
    const options = [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
    ];

    const addItem = () => {
        const formData = new FormData()
        formData.append('itemId', item.id)
        formData.append('selectedSize', selectedSize)
        addToBasket(formData).then(response => onHide())
    }


    return (
        <div onClick={(e) => e.stopPropagation()}>
        <Modal
            show={show}
            onHide={onHide}
            size='xl'
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex'>
                <Image src={process.env.REACT_APP_API_URL + item.img} width={500} height={500}/>
                    <div>
                        <div className='fs-3'>
                            {item.name}
                            <div className='mt-4'>
                                {item.price}
                            </div>
                        </div>
                        <div className='pt-5 d-flex'>
                            <Select
                                options={options}
                                onChange={setSelectedSize}
                                value={selectedSize}
                                className='w-50'
                            />
                            <Button className='w-50 h-25 ms-3' variant="dark" onClick={addItem}>Добавить в корзину</Button>
                        </div>
                        <div className='desc pb-5 pt-5'>
                            {item.description}
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
        </div>
    );
});

export default ItemModal;
