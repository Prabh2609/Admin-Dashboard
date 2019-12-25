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
                    labels:Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage),
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