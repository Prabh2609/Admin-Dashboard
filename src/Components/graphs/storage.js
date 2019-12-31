//  FOR FUTUTRE REFERENCE
//          OBJECT.KEYS(OBJECT_NAME) RETURNS AN ARRAY WITH ALL THE KEYS PRESENT IN THAT OBJECT SIMILARLY OBJECT.VALUE() RETURNS VALUES

//          HOW VALUE OF LABEL IS ATTAINED?
//          TAKE IT LIKE THIS

//          OBJ=OBJECT.KEYS(GET_FROM_LOCAL_STORAGE)
//          OBJECT.KEYS(OBJ).MAP(ITEM) WILL RETURN ALL THREE KEYS THAT IS AVAILABLE,USED AND SYSTEM
//          THEN USED TEMPLATE STRING TO COMBINE 
//          OBJECT.VALUES(OBJECT) RETURNS VALUE OF AVAILABLE,USED AND SYSTEM
//          AND OBJECT.VALUES(OBJECT)[POS] WILL RETURN AVAILABLE VALUE FOR POS = 0, USED FOR POS=1 AND SYSTEM FOR POS = 2

import React,{Component} from 'react'
import classes from './graphs.module.css'
import Pie from 'react-chartjs-2'

class performance extends Component
{
    render(){
        return(
            <div className={classes.container}>
        <Pie
            options={{
                responsive:true,
                cutoutPercentage:0,
                legend:{
                    labels: {
                        fontColor: 'white',
                    }
                }
            }}
            data={
                {
                    labels:
                        Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage).map((objectKey,pos)=>
                            `${objectKey}(${Object.values(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage)[pos]}GB)`
                        )
                    ,
                    datasets:[{
                        data:Object.values(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage),
                        backgroundColor:["rgba(255,99,132,1)","rgba(55,162,235,1)","rgba(155,102,64,1)"]
                    }]
                }
            }
        />
      </div>
        )
    }
}

export default performance