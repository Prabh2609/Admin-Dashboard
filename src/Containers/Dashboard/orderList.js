import React from 'react'
import classes from './orderList.module.css'

const orderList=()=>
{
    var orderLi=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.orders.map((order,pos)=>{
        return(
            <tr key={pos}>
                <td>{`#${order.orderNo}`}</td>
                <td>{order.status}</td>
                <td>{order.operators}</td>
                <td>{order.location}</td>
                <td>{order.distance}</td>
                <td>{order.startDate}</td>
                <td>{order.deliveryDate}</td>
            </tr>
        )
    })
    
    return(
        <div className={classes.orderContainer}>
            <table>
                <thead>
                    
                    <th scope="col">ORDER NO</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">OPERATORS</th>
                    <th scope="col">LOCATION</th>
                    <th scope="col">DISTANCE</th>
                    <th scope="col">START DATE</th>
                    <th scope="col">EST DELIVERY DATE</th>
                </thead>
                <tbody>{orderLi}</tbody>
            </table>
        </div>
    )
}

export default orderList;