// FOR FUTUTRE REFERENCE
//              FOR GIVING COLORS TO DIFFERENT ORDER STATUS I USED NESTED CONDITIONAL OPERATOR
//              I KNOW ITS COMPLEX BUT CANT COME UP WITH ANYTHING ELSE SINCE SWITCH AND IF ARE NOT ALLOWED THERE
//              SO HERE IS HOW IT WORKS:
//              (SWITCH VERSION OF NESTED CONDITIONAL OPERATOR)
//              SWITCH(ORDER_STATUS)
//              {
//                  CASE "X":PRINT X
//                  CASE "Y":PRINT Y
//                  CASE "Z":PRINT Z
//                  ... ETC
//              }   
//              CONDITION STATEMENT WILL BE : ORDER_STATUS===X? PRINT X:ORDER_STATUS===Y ? PRINT Y : ORDER_STATUS===Z ? PRINT Z : DEFAULT CASE
//              MEANS HERE IN EVERY FAILED CONDITION WE NEED TO PUT ANOTHER CONDITIONAL STATEMENT
//                      IMPORTANT THING : AVOID THIS WHENEVER POSSIBLE...IT HAVE POWER TO BLOW UP YOUR MIND

import React from 'react'
import classes from './orderList.module.css'

const orderList=()=>
{
    var orderLi=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.orders.map((order,pos)=>{
        return(
            <tr key={pos}>
                <td>{`#${order.orderNo}`}</td>
                <td><div className={[classes.status,order.status==="Cancelled"?classes.Cancelled:order.status==="Pending"?classes.Pending:classes.Moving].join(" ")}></div>{order.status}</td>
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
                    <tr>                    
                    <th scope="col">ORDER NO</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">OPERATORS</th>
                    <th scope="col">LOCATION</th>
                    <th scope="col">DISTANCE</th>
                    <th scope="col">START DATE</th>
                    <th scope="col">EST DELIVERY DATE</th>
                    </tr>
                </thead>
                <tbody>{orderLi}</tbody>
            </table>
        </div>
    )
}

export default orderList;