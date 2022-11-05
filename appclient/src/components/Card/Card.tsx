import React, {FC, useState} from 'react';
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import ItemModal from "../modals/Modal";
import {IItem} from "../../interfaces/IItem";

const ICard: FC<IItem> = observer((card) => {
    const [img, setImg] = useState(process.env.REACT_APP_API_URL + card.img)
    const [show, setShow] = useState(false)
    console.log(card)

    const handleSwitchImg = () => {
        setImg(process.env.REACT_APP_API_URL + card.backImg)
    }

    const handleSetDefaultImg = () => {
        setImg(process.env.REACT_APP_API_URL + card.img)
    }
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Card key={card.id} style={{ width: '250px', border: 'none' }} onClick={handleOpen}>
            <Card.Link href='#' className='text-decoration-none'>
              <div onMouseEnter={handleSwitchImg} onMouseLeave={handleSetDefaultImg}>
                <Card.Img variant="top" src={img} />
              </div>
                <Card.Body>
                    <Card.Text>{card.name}</Card.Text>
                    <Card.Text>
                        {card.price}
                    </Card.Text>
                </Card.Body>
            </Card.Link>
            <ItemModal item={card} show={show} onHide={handleClose}/>
        </Card>
    );
});

export default ICard;
