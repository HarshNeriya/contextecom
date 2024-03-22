import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { cartContext } from '../Context/Maincontext';
export default function Cart() {
    let{carts,setcarts}=useContext(cartContext);
    let finaltot=0
    carts.forEach((Element)=>{
      finaltot+=(Element.qty*Element.price)
    })
    let finalCart=carts.map((cartDetails,i)=>{
        return(
            <CartItems cartDetails={cartDetails} index={i} key={i}/>
        )
    });
    

    
    
  return (
    <div>
        <Header/>
        <Container fluid>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                   <h1>Carts</h1>
                    </Col>
                </Row>
                <Row>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#
            S.No
          </th>
          <th>Product Name</th>
          <th>Product Image</th>
          <th>Product Qty</th>
          <th>price</th>
          <th>total</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
 
      {finalCart}
        
      </tbody>
    </Table>
  <h3>Total :{ finaltot}</h3>
                </Row>
            </Container>
        </Container>
    </div>
  )
}
function CartItems({cartDetails,index}){
  let{carts,setcarts}=useContext(cartContext)
  let[cartqty,setcartqty]=useState(cartDetails.qty)
  let cartDelete=()=>{
    let filterData=carts.filter((v,i)=>index!=i);
    setcarts(filterData)
  }
let changeQty=(event)=>{
setcartqty(event.target.value)
let qtyfilter=carts.filter((v,i)=>{
  if(i==index){
    v.qty=event.target.value
  }
  return v;
})
setcarts(qtyfilter)
  }
    return(<tr>
        <td>{index+1}</td>
        <td>{cartDetails.name}</td>
        <td><img src={cartDetails.image} width={"60"}/></td>
        <td><input type ="number"max={10} min ={1} onChange={changeQty} value={cartqty}/></td>
        <td>{cartDetails.price}</td>
        <td>{cartDetails.qty*cartDetails.price}</td>
       <td><button onClick={cartDelete}>Delete</button></td>
      </tr>)

}
