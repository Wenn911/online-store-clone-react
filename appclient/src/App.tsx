import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import {Container} from "react-bootstrap";
import routes from './routes'
import Shop from "./pages/Shop";
import {observer} from "mobx-react-lite";
import Basket from "./pages/Basket";

const App = observer(() => {
    return (
        <Router>
            <Container>
              <Navigation />
                <Routes>
                    <Route path={routes.homePage()} element={<Shop />} />
                    <Route path={routes.basket()} element={<Basket />}/>
                </Routes>
            </Container>
        </Router>
            );
})

export default App;
