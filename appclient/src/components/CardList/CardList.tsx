import React, {FC, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ICard from "../Card/Card";
import {Row} from "react-bootstrap";
import {IItem} from "../../interfaces/IItem";

const CardList: FC = observer(() => {
    const {item} = useContext(Context)

    return (
        <Row>
            {item.items.slice().sort((a: any,b: any) => a.id - b.id).map((i: IItem) =>
                <ICard key={i.id} {...i} />
            )}
        </Row>
    );
});

export default CardList;
