import React,{Component} from 'react'
import classes from './graphs.module.css'
import {HorizontalBar} from 'react-chartjs-2'

class performance extends Component
{

    render(){
        return(
            <div className={classes.container}>
            <HorizontalBar
                options= {{
                    responsive:true,
                 legend: {
                     display: true,
                     labels: {
                         fontColor: 'white'
                     }
                 },
                 scales:{
                     xAxes:[{
                         ticks:{
                             fontColor:"white"
                         }
                     }],
                     yAxes:[{
                         ticks:{
                             fontColor:"white"
                         },
                         scaleLabel:{
                             display:true,
                             labelString:"Hits",
                             fontColor:"white",
                             
                         }
                     }]
                 }
             }
             }
                data={
                    {
                        labels:Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.performance),
                        datasets:[{
                            label:"# of Hits",
                            barThickness:8,
                            backgroundColor:Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.performance),
                            data:Object.values(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.performance),
                            hoverBackgroundColor:Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.performance),
                        }]
                    }
                }
            />  
          </div> 
        )
    }
}
export default performance