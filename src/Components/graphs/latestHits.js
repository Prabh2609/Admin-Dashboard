import React,{Component} from 'react'
import classes from './graphs.module.css'
import {Line} from 'react-chartjs-2'


class latestHits extends Component
{
    state={
            graphDataLatestHits:{
            labels:JSON.parse(localStorage.getItem("Response")).dasbhoardPage.latestHits.months,
            datasets:[
                {
                    label:"LatestHits",
                    data:JSON.parse(localStorage.getItem("Response")).dasbhoardPage.latestHits.latest,
                    backgroundColor:"transparent",
                    borderColor:"rgba(255,99,132,1)"
                },
                {
                    label:"PopularHits",
                    data:JSON.parse(localStorage.getItem("Response")).dasbhoardPage.latestHits.popular,
                    borderColor:"rgba(55,162,235,1)",
                    backgroundColor:"transparent",
                },
                {
                    label:"Featured",
                    data:JSON.parse(localStorage.getItem("Response")).dasbhoardPage.latestHits.featured,
                    borderColor:"rgba(155,102,64,1)",
                    backgroundColor:"transparent",
                },
            ]
        }

    }
    render(){
        return(
            <div className={classes.container}>
                {localStorage.getItem("Response")!==null?
                <Line
                       options= {{
                           responsive:true,
                           elements:
                           {
                               point:{
                                   radius:0
                               }
                           },
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
                    
                    data={this.state.graphDataLatestHits}
                />:null}
            </div>
        )
    }
}
export default latestHits