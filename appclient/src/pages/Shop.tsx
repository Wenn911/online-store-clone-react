import React, { useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchItems, fetchTypes} from "../api/itemApi";
import CardList from "../components/CardList/CardList";
import NavTypes from "../components/Navigation/NavTypes";

const Shop = observer(() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => {
            item.setTypes(data)
        })
        fetchItems(null).then(data => {
            item.setItems(data)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id).then(data => {
            item.setItems(data)
        })
    }, [item.selectedType])

    return (
        <div>
            <NavTypes />
            <CardList />
        </div>
    );
});

export default Shop;
