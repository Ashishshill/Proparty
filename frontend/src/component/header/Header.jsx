import Container from 'react-bootstrap/Container';
import "./header.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstImage from '../../images/First.png'
import Button from 'react-bootstrap/Button';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
          <div className='firstHeading col-6'>
            <h1>DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
            <p>We will give you the best project </p>
            <p>aiendis veniam est!</p>  
            <Button className='' variant="outline-success">Explore Now</Button> 
            <span>
              <h2>98K+ </h2>
              <p>nothing</p>
            </span>
            <span>
              <h2>98K+ </h2>
              <p>nothing</p>
            </span>
            <span>
              <h2>98K+ </h2>
              <p>nothing</p>
            </span>
          </div>
        </Col>
        <Col>
          <div>
          <img className='img col-6' src={firstImage} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;