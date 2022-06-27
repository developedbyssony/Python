import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-top">
                    <h1 className="login-character"></h1>
                    <h1 className="login-logo"></h1>
                </div>
                <form action="post" className="login-box">
                    <div className="login-sec-box">
                    <input type="input" placeholder='아이디'></input>
                    <input type="password" placeholder='비밀번호'></input>
                    </div>
                    <button className="btn-secondary btn-55">로그인</button>
                </form>
                <div className="social-login">
                    <button className="btn">
                        <h1 className="naver-logo"></h1>    
                        <span className="naver-login-txt">네이버로 로그인</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default login;