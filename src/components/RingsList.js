import { Col,Container,Row} from "react-bootstrap";
import Cards from './Cards';
import '../components/navigation.css';
const RingsList= (props) => {
     const{rings,onAdd}= props;
    return (
    
      <Container>
      <br></br>
     <h4 className="title">OUR RINGS</h4>
     <Row>
     {
            rings.map((ring) => {
                return( 
                     <Col md={4}>
                <Cards onAdd={onAdd} item={ring} />

            </Col>)
              
            })
     }
</Row>

     </Container>
      
    );
   };
   export default  RingsList;