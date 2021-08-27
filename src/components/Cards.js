import React from "react";
import { Card,Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route,Link, useRouteMatch,useParams} from "react-router-dom";

const Cards = (props) => {
  const{item,onAdd}= props;

    console.log(item)
    return (
      <>
     <Card style={{ width: '25rem', height:'35rem', marginTop:"25px", textAlign:"center"}}>
     <Card.Img variant="top" src={item.posterUrl} style={{height:'400px'}} />
     <Card.Body>
     <Card.Title>{item.title}</Card.Title>
     <Card.Text>
     {item.description} DT
     </Card.Text>
     </Card.Body>
     <div style={{textAlign:'center', marginBottom:'1.4rem'}}>
    <Button variant="outline-dark" onClick={() => onAdd(item)} >Add to cart</Button>
     </div>
     </Card>
      </>
    );
   };
   export default  Cards;