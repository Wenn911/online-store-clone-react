import React, {FC, useState} from 'react';
import {Card} from "react-bootstrap";

interface ICardProps {
    title: string,
    price: string,
}

const ICard: FC<ICardProps> = ({title, price}) => {
    const [img, setImg] = useState('https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/748053/3_2.jpg');

    const handleSwitchImg = (): void => {
        setImg('https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/748052/3_1.jpg')
    }
    const handleSetDefaultImg = (): void => {
        setImg('https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/748053/3_2.jpg')
    }

    return (
        <Card style={{ width: '200px', border: 'none' }}>
            <Card.Link href='#' className='text-decoration-none'>
              <div onMouseEnter={handleSwitchImg} onMouseLeave={handleSetDefaultImg}>
                <Card.Img onMouseEnter={handleSwitchImg} variant="top" src={img} />
              </div>
                <Card.Body>
                    <Card.Text className=''>{title}</Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card.Link>
        </Card>
    );
};

export default ICard;