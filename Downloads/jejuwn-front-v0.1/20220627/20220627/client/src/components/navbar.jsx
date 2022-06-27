import React, { Component } from 'react';
import {  BrowserRouter as Router, Link } from "react-router-dom";
import Navigation from "./pages/navigation";
import "../css/App.css";

class Navbar extends Component {
    state = {
        color:"#ddd",
    };
    onClickEnter = () => this.setState({color:"black"});
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="navbar">
                        <a hef="#">
                        <h1 className="logo"></h1>
                        </a>
                        <div className='navbar-menu-div'>
                            <a className="menu text-style-18"><Link to="/navigation">교통</Link></a>
                            <a className="menu text-style-18"><Link to="/activity">액티비티</Link></a>
                            <a className="menu text-style-18"><Link to="/restaurant">맛집</Link></a>
                        </div>
                        <div className='navbar-menu-right'>
                            <a hef="#"><Link to="/cart"><h1 className="cart"></h1></Link></a>
                            <a className="menu-right text-style-14"><Link to="/login">로그인</Link></a>
                            <a className="menu-right text-style-14"><Link to="/signup">회원가입</Link></a>
                            <button className="btn-primary btn-40">글쓰기</button>
                        </div>
                        {/*
                        <div className='navbar-menu-right login'>
                            <h1 className="cart"></h1>
                            <a className="menu-right text-style-14" onClick={}>uid</a>
                            <button className="btn-primary btn-40">글쓰기</button>
                        </div>
                        */}                                
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;