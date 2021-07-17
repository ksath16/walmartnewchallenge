import { ItemsDropDown } from './ItemsDropDown';
import { Users } from './Users';
import { AgeMetrics } from './AgeMetrics';
import { useState } from 'react';

export const LandingPage = () => {

    return <>
        <div className="container walmart-container">
            <div className="row">
                <div className="col align-self-center grid-col">
                    <Users />
                </div>

            </div>
            <div className="row">
                <div className="col align-self-center grid-col">
                    <ItemsDropDown />
                </div>
            </div>

        </div>


    </>
}