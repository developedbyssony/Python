import React, { Component } from 'react';

class my extends Component {
    render() {
        return (
            <div className="container">
                <div className="cart-top-sec">
                <h1 className="page-tit">장바구니</h1>
                    <table class="table">
                        <thead class="text-center">
                        <tr>
                            <th class="header" width="30"><input type="checkbox" id="checkall" /></th>
                            <th>제목</th>
                            <th>지역</th>
                            <th>옵션</th>
                            <th>판매가</th>
                            <th>결제금액</th>
                        </tr>
                        </thead>
                        <tbody class="text-center">
                        <tr>
                            <th class="header" width="30"><input type="checkbox" id="checkall" /></th>
                            <td>제목</td>
                            <td>지역</td>
                            <td>옵션</td>
                            <td>판매가</td>
                            <td>결제금액</td>
                        </tr>
                        <tr>
                            <th class="header" width="30"><input type="checkbox" id="checkall" /></th>
                            <td>제목</td>
                            <td>지역</td>
                            <td>옵션</td>
                            <td>판매가</td>
                            <td>결제금액</td>
                        </tr>
                        <tr>
                            <th class="header" width="30"><input type="checkbox" id="checkall" /></th>
                            <td>제목</td>
                            <td>지역</td>
                            <td>옵션</td>
                            <td>판매가</td>
                            <td>결제금액</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="cart-btn">
                        <button type="button" className="btn-my-cart btn-secondary">바로 구매</button>
                    </div>
                </div>
                
                <h1 className="page-tit">찜 List</h1>
                <div>
                    <ul className="like-list"> 
                        <ul class="nav nav-pills" role="tablist" className="like-tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#activity">액티비티</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#restaurant">맛집</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="activity" class="container tab-pane active">
                                
                            </div>

                        </div>
                        <li className="like-list-item">
                            <div className="like-list-item-contents">
                                목록 1
                                <div className="like-list-item-ic-cart"><h1 className="ic-cart"></h1></div>
                                <h1 className="like-list-item-ic-delete"></h1>
                            </div>
                            </li>
                        <li className="like-list-item">  
                            <div className="like-list-item-contents">
                            목록 1
                            <div className="like-list-item-ic-cart"><h1 className="ic-cart"></h1></div>
                            <h1 className="like-list-item-ic-delete"></h1>
                            </div>
                        </li>
                        <li className="like-list-item">  
                            <div className="like-list-item-contents">
                            목록 1
                            <div className="like-list-item-ic-cart"><h1 className="ic-cart"></h1></div>
                            <h1 className="like-list-item-ic-delete"></h1>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default my;