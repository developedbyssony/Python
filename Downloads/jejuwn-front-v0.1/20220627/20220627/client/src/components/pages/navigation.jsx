import React, { useState, useEffect } from 'react';
import KakaoMapScript from '../../library/kakaoMapScript';

export default function navigation(props) {
    useEffect(() => {
        KakaoMapScript();
     }, []); 

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="section">
                            <h1 className="page-tit">어떤 렌터카 찾으세요?</h1>
                            <div className="navigation-top-img">
                                    <div className="navigation-img1">이미지 배너</div>
                                    <div className="navigation-img2">이미지 배너</div>
                                    <div className="navigation-img3">이미지 배너</div>
                                    <div className="navigation-img4">이미지 배너</div>
                            </div>
                            <h1 className="page-tit">제주도 지역별 추천 명소 키워드 검색</h1>
                            <div class="map-group">
                            <div id="map"></div>
                            <div className="map-contents">
                            <div class="input-group">
                            <input class="form-input" type="text" placeholder="키워드 검색" />
                            <button type="button"><div class="ic-search"></div></button>
                            </div>
                            <div className="keyword-search">검색 내역 노출 영역</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }