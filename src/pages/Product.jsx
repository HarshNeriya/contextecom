import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Common/Header'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartContext } from '../Context/Maincontext';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Product() {
    let[product,setproduct]=useState([])
    let getProduct=()=>{
        axios.get(`https://dummyjson.com/products`)
        .then((res)=>res.data)
        .then((finalres)=>{
            setproduct(finalres.products)
        })
    }
    useEffect(()=>{
        getProduct();
    },[])
    let finalproduct=product.map((v,i)=>{
        return(
            <Productitems pdata={v}/>
        )
    })
  return (
    <div>
        <Header/>
        <Container fluid>
            <Container>
            <Row sm={12}>
                <Col className='text-center gy-3'>
                    <h1>Products</h1>
                </Col>
            </Row>
            <Row className='gy-4'>
                
              { finalproduct}

            </Row>
            </Container>
            <NotificationContainer/>
        </Container>
    </div>
  )
}
let Productitems=({pdata})=>{
   let{carts,setcarts}=useContext(cartContext)
   let addcart=()=>{
    let filterdata=carts.filter((v,i)=>v.name==pdata.title)
  if(filterdata.length==1){
    let filterdatafinal=carts.filter((v,i)=>{
       if( v.name=pdata.title){
        v.qty=v.qty+1
       }
       return v;
  

    })
    setcarts(filterdatafinal)
    NotificationManager.success(`${pdata.title}qty updata in your cart`)
   
  }
  else{
    let cardDetails={
        name:pdata.title,
        image:pdata.thumbnail,
        price:pdata.price,
        qty:1
    }
    setcarts([...carts,cardDetails])
    NotificationManager.success(`${pdata.title}add in your cart`)
  }
  
    
   
   }
   

    return(<Col xs={12} md={6} lg={3}>
    
        <Card>
          <Card.Img variant="top" src={pdata.thumbnail} style={{width:'100%',height:'250px'}}/>
          <Card.Body>
            <Card.Title>{pdata.title}</Card.Title>
            <Card.Text>
             {pdata.description.slice(0,10)}
             <p>Rs{pdata.price}</p>
            </Card.Text>
            <Button onClick={addcart}>add to cart</Button>
          </Card.Body>
        </Card>
    </Col>)


}
