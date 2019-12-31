import React from 'react';
import LatestHits from '../../Components/graphs/latestHits'
import Perfomance from '../../Components/graphs/performance'
import Storage from '../../Components/graphs/storage'
import classes from './dashboard.module.css';
import Notification from '../../Components/notifications/notification';
import OrderList from '../../Components/orderList/orderList';


const Dashboard=()=>{
    return(
        <div className={classes.dashContainer}>
            {/* HEADING BLOCK */}
            <div className={classes.dashHeading}>
                <p className={classes.dashTitle}>Welcome back,<b>Admin</b></p>
            </div>
            {/* HEADING BLOCK ENDS */}
            {/* CONTENT BLOCK */}
                <div className={classes.content}>
                    {/* BLOCK FOR LATEST HITS */}
                    <div className={classes.contentBlock}>
                        <h2 className={classes.title}>Latest Hits</h2>
                        <LatestHits/>
                    </div>
                    {/* BLOCK FOR LATEST HITS ENDS HERE */}
                    {/* BLOCK FOR PERFORMANCE  */}
                    <div className={classes.contentBlock}>
                        <h2 className={classes.title}>Perfomance</h2>
                        <Perfomance/>
                    </div>
                    {/* BLOCK FOR PERFORMANCE ENDS HERE */}
                    {/* BLOCK FOR STORAGE */}
                    <div className={classes.contentBlock}>
                        <h2 className={classes.title}>Storage</h2>
                        <Storage/>
                    </div>
                    {/* BLOCK FOR STORAGE ENDS HERE */}
                    {/* BLOCK FOR NOTIFICATIONS */}
                    <div className={classes.contentBlock}>
                        <h2 className={classes.title} style={{paddingLeft:"24px"}}>Notification List</h2>
                        <Notification/>
                    </div>
                    {/* BLOCK FOR NOTIFICATIONS ENDS HERE */}
                    {/* BLOCK FOR ORDER LIST */}
                        <div className={classes.orderContent}>
                            <h2 className={classes.title}>Order List</h2>
                            <OrderList/>
                        </div>
                </div>
            {/* CONTENT BLOCK ENDS */}
        </div>
          );
    }

    export default Dashboard;