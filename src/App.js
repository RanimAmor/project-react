import React from "react";
import './App.css';
 import { useState } from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 useParams,
 useRouteMatch
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import ListOfCards from "./components/ListOfCards";
import Carousell from "./components/Carousell";
import NecklaceList from "./components/NecklaceList";
import RingsList from "./components/RingsList";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
 
export default function App() {
  const [item,setItem]=useState( [
    {
    'id':"B001",
    'title': "Curb Chain Bracelet",
    'description': 85 ,
    'posterUrl': "https://i.pinimg.com/564x/06/62/ec/0662ec1fc87757acbff02a8b1b994348.jpg",

      },
    {
      'id':"B002",
      'title': "Fantasy Bracelet",
      'description': 70 ,
      'posterUrl': "https://i.pinimg.com/564x/f1/d2/51/f1d251322ef70c8a0e86569377166299.jpg",

    },
    {
      'id':"B003",
      'title': "Sunshine Bracelet",
      'description': 65 ,
      'posterUrl': "https://i.pinimg.com/564x/99/47/9a/99479a52d149cc4df1d7ec13c8e8ffb9.jpg",

      },
      {
        'id':"B004",
        'title': "Gold Butterfly Bracelet",
        'description': 80 ,
        'posterUrl': "https://i.pinimg.com/564x/ff/ed/6e/ffed6ea8d8c3157ae8ce42c404fe650e.jpg",
  
        },
        {
          'id':"B004",
          'title': "Classic Bangle Bracelet",
          'description': 60 ,
          'posterUrl': "https://i.pinimg.com/564x/bd/10/12/bd1012f627cb38608aca2743f52a2399.jpg",
    
          },
          {
            'id':"B004",
            'title': "Distance Tennis Bracelet",
            'description': 80,
            'posterUrl': "https://i.pinimg.com/564x/6e/14/9b/6e149b6f4096bca375f64ffe5bdc3a41.jpg",
      
            },
    ])
    const [necklace,setNecklace]=useState( [
      {
      'id':"N001",
      'title': "Disc Charm Layered Necklace",
      'description': 80,
      'posterUrl': "https://i.pinimg.com/564x/50/22/6d/50226def0c1fd3076930ea727c556c12.jpg",
  
        },
      {
        'id':"B002",
        'title': "Childhood Necklace",
        'description': 60,
        'posterUrl': "https://i.pinimg.com/564x/93/a5/4b/93a54b66821cbe28c642e6ebcdb7525a.jpg",
  
      },
      {
        'id':"N003",
        'title': "Pearl Necklace",
        'description': 70,
        'posterUrl': "https://i.pinimg.com/564x/8e/0e/5a/8e0e5a450d3502e62e7cf08cdcd6b529.jpg",
  
        },
        {
          'id':"N004",
          'title': "Chain Necklace",
          'description': 65,
          'posterUrl': "https://i.pinimg.com/564x/70/7d/06/707d06a5c2839f417c377ea69fdcb8f8.jpg",
    
          },
       
          
         {
          'id':"N005",
          'title': "Heart Necklace",
          'description':50 ,
          'posterUrl': "https://i.pinimg.com/564x/38/9b/12/389b121dcb69327ca96489754dc85102.jpg",
    
          },
          {
            'id':"N006",
            'title': "Charlie Necklace",
            'description': 75 ,
            'posterUrl': "https://i.pinimg.com/564x/12/cd/ac/12cdacfb5e5fb0202fb558e358e55fe0.jpg",
      
           },
            
      ])
      const [ring,setRing]=useState( [
        {
        'id':"R001",
        'title': "Gold Cigar Rings",
        'description': 70,
        'posterUrl': "https://i.pinimg.com/564x/28/0d/96/280d968d1d44ad9db48281857137c24b.jpg",
    
          },
        {
          'id':"R002",
          'title': "Solo ring",
          'description': 30,
          'posterUrl': "https://i.pinimg.com/564x/b8/91/5f/b8915f58def668162366d9b5fe3d8d6d.jpg",
    
        },
        {
          'id':"R003",
          'title': "Twist Rings",
          'description': 40,
          'posterUrl': "https://i.pinimg.com/564x/bc/f5/ae/bcf5aecf7a30f247cdf232842f12dbad.jpg",
    
          },
          {
            'id':"N004",
            'title': "Hammered Stacking Ring",
            'description': 35,
            'posterUrl': "https://i.pinimg.com/564x/b8/d2/b6/b8d2b685dfe0661211a340a8cb47acb2.jpg",
      
            },
         
            
           {
            'id':"N005",
            'title': "Heart Ring",
            'description': 50,
            'posterUrl': "https://i.pinimg.com/564x/4d/5e/59/4d5e595faa3de42c0a25458ca1aca7b3.jpg",
      
            },
            {
              'id':"R006",
              'title': "Eternity Rings",
              'description': 45,
              'posterUrl': "https://i.pinimg.com/564x/54/4b/06/544b06aacf4427a9c6beb37d6529d824.jpg",
        
             },
              
        ])
        const [cartItems, setCartItems] = useState([]);
        const onAdd = (product) => {
          const exist = cartItems.find((x) => x.id === product.id);
          if (exist) {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
          } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
          }
        };
        const onRemove = (product) => {
          const exist = cartItems.find((x) => x.id === product.id);
          if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
          } else {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
              )
            );
          }
        };
 return (
   
 <Router>
 <div>
 <Navigation countCartItems={cartItems.length}></Navigation>
 <Switch>
 <Route exact path="/">
  <Carousell></Carousell>
 <ListOfCards  onAdd={onAdd} items={item} ></ListOfCards>
 <NecklaceList onAdd={onAdd} necklaces={necklace}></NecklaceList>
 <RingsList onAdd={onAdd} rings={ring}></RingsList>
 <Footer></Footer>
 </Route>
 <Route path="/Login">
 <Login />
 </Route>
 <Route path="/Register">
 <Register />
 </Route>
 <Route path="/Basket">
 <Basket  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
 </Route>
 </Switch>
 </div>
 </Router>
 );
}

 