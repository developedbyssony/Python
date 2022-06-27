import React, { Component } from 'react';

class signup extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="section">
                <h1 className="page-tit">회원가입</h1>
                <form action="" className="signup-form">
                    <span className="signup-tit1">필수정보</span>
                        <span className="signup-input-tit">아이디</span>
                        <input type="text" className="" placeholder="아이디" id="id" />
                        <span className="signup-input-tit">성명</span>
                        <input type="text" className="" placeholder="이름을 적어주세요." id="name" />
                        <span className="signup-input-tit">비밀번호</span>
                        <input type="password" className="pass" placeholder="영문,숫자 포함 8자 이상의 비밀번호" />
                        <span className="signup-input-tit">성별</span>
                        <div className="gender-checkBox">
                            <div className="jeju-man-icon">
                            <h1 className="ic-man"></h1>
                            <p><input type="radio" name="gender" id="check-label"></input></p>
                            <div className="radio-txt">남자입니다.</div>
                            </div>
                            <div className="jeju-woman-icon">
                            <h1 className="ic-woman"></h1>
                            <p><input type="radio" name="gender" id="check-label"></input></p>
                            <div className="radio-txt">여자입니다.</div>
                            </div>
                        </div>
                        <span className="signup-input-tit">이메일</span>
                        <input type="text" className="" placeholder="이메일" id="email" />
                        <span className="signup-input-tit">닉네임</span>
                        <input type="text" className="" placeholder="별명 (2자~5자)" id="nick" />
                        <span className="signup-input-tit">선택사항</span>
                        <input type="text" className="role" />
                    <span className="signup-tit2">선택정보</span>
                        <span className="signup-input-tit">전화번호</span>  
                        <div className="tel-box">
                            <input type="tel" className="phone" />
                        </div>
                        <span className="signup-input-tit">연령</span>
                        <input type="text" className="age" />
                        <input type="submit" className="btn-secondary btn-55" value="회원 가입" id="signUpbtn"></input>
                </form>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default signup;