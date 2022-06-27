import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Category from './category';

const Layout = (props) => {
    return(
        <div>
            <Navbar />
            <Category />
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;