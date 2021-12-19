import React from 'react';
import classes from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

export default function Card({work,time,Duration}) {
    return (
       
            <div className={classes.card}>
            <div className={classes.card_under}>
                <div className={classes.visible}>
                    <div className={classes.header}>
                        <h3>{work}</h3>
                        <FontAwesomeIcon icon={ faEllipsisH }/>

                    </div>
                    <div>
                        <h1>{time}</h1>
                        <h2>{Duration}</h2>
                    </div>

                </div>

            </div>
            
        </div>
        
    )
}
