import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
         <div>
            <h1>
                The Amazon Art
            </h1>
         </div>
        </Col>
        <Col>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fuga totam praesentium consequatur id ut, ullam voluptatibus quod omnis ea illum temporibus pariatur quasi quia commodi fugit? Voluptates, debitis odio.
            </p>
        </Col>
        <Col>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fuga totam praesentium consequatur id ut, ullam voluptatibus quod omnis ea illum temporibus pariatur quasi quia commodi fugit? Voluptates, debitis odio.
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;