import React, { useState } from 'react';
import Modal from '../modals/modal.jsx';

export default function activity(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    }

    const closeModal = () => {
      setModalOpen(false);
    }
        return (
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12">
                     <div className="section">
                    <div className="activity-landmark">액티비티 메인비주얼</div>
                    <table class="table">
                    <thead class="text-center">
                        <tr>
                           <th>번호</th>
                           <th>제목</th>
                           <th>지역</th>
                           <th>가격</th>
                           <th>날짜</th>
                           <th>조회수</th>
                           <th>Like</th>
                           <th>Reservation</th>
                        </tr>
                     </thead>
                     <tbody class="text-center align-middle">
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td>
                              <div className="tag-outline" onClick={openModal}>예약하기</div>
                              <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
                           </td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        <tr>
                           <td>번호</td>
                           <td>제목</td>
                           <td>지역</td>
                           <td>가격</td>
                           <td>날짜</td>
                           <td>조회수</td>
                           <td><div className="ic-heart"></div></td>
                           <td><div className="tag-outline">예약하기</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="pagination">
                     <button type="button" class="page-control page-prev">
                     <i class="icon-chevron-left"></i>
                     </button>

                     <ul class="page-list">
                        <li class="page-item is-active"><a href="/">1</a></li>
                        <li class="page-item"><a href="/">2</a></li>
                        <li class="page-item"><a href="/">3</a></li>
                        <li class="page-item"><a href="/">4</a></li>
                        <li class="page-item"><a href="/">5</a></li>
                     </ul>

                     <button type="button" class="page-control page-next">
                     <i class="icon-chevron-right"></i>
                     </button>
                     </div>
                    </div>
                  </div>
               </div>
         </div>
        );
    }

