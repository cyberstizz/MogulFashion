import React from 'react';
import './Pants.scss';
import SexHeader from './SexHeader';
import Hamburger from './Hamburger';


const Pants = () => {


    return(
        <React.Fragment>
            <header className='ProductTop'>
                <Hamburger />
                <SexHeader />
            </header>

        </React.Fragment>
    )
}