import { Col,Container,Row} from "react-bootstrap";
import Cards from './Cards';
import '../components/navigation.css';
const ListOfCards= (props) => {
    const{items,onAdd}= props;
    return (
    
      <Container>
      <br></br>
     <h4 className="title">OUR BRACELETS</h4>
     <Row>
     {
            items.map((item) => {
                return( 
                     <Col md={4}>
                <Cards item={item} onAdd={onAdd} />

            </Col>)
              
            })
     }
</Row>

     </Container>
      
    );
   };
   export default   ListOfCards;