import React, {FC} from 'react';
import Navigation from "./components/Navigation/Navigation";
import ICard from "./components/Card/Card";
import {Container, Row} from "react-bootstrap";

const App: FC = () => {
  return (
      <div className="">
          <Navigation />
          <Container className='w-50'>
              <Row>
              <ICard title={'YUMMS GOTHIC LOGO TEE in BLACK'} price={'2200 ₽'} />
              </Row>
          </Container>
      </div>
  );
}

export default App;
