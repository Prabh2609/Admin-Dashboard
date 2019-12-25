import React from 'react';
import classes from './notification.module.css';

const Notification=()=>{


        var noti=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.notifications.map((notification,pos)=>{
                                            return(
                                                <div className={classes.notificationContainer} key={pos}>
                                                    <div className={classes.imageContainer}>
                                                    <img className={classes.notiImage} src={notification.pic} alt="pic"/>
                                                    </div>

                                                    <div className={classes.messageContainer}>
                                                    <p className={classes.message}>
                                                        {notification.message}
                                                    </p>
                                                    <p className={classes.time}>
                                                        {`${notification.time} ago`}
                                                    </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    

        return(
            <div className={classes.notificationListContainer}>
                {noti}
            </div>
        )
        }

        export default Notification;