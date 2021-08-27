import { Col,Container,Row} from "react-bootstrap";
import Cards from './Cards';
import '../components/navigation.css';
const NecklaceList= (props) => {
     const{necklaces,onAdd}= props;
    return (
    
      <Container>
      <br></br>
     <h4 className="title">OUR NECKLACES</h4>
     <Row>
     {
            necklaces.map((necklace) => {
                return( 
                     <Col md={4}>
                <Cards item={necklace} onAdd={onAdd}/>

            </Col>)
              
            })
     }
</Row>

     </Container>
      
    );
   };
   export default  NecklaceList;