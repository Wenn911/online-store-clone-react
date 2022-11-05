import React, {useContext} from 'react';
import {Nav} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const NavTypes = observer(() => {
    const {item} = useContext(Context)

    return (
        <Nav className='justify-content-center double-lines'>
            {item.types.map((type: any) =>
                <Nav.Item
                    key={type.id}
                >
                    <Nav.Link id={type.id} onClick={() => item.setSelectedType(type)}>
                        {type.name}
                    </Nav.Link>
                </Nav.Item>
            )}
        </Nav>
    );
});

export default NavTypes;
