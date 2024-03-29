import React, {useState, useEffect} from 'react';
import Header from '../../../Component/Header';
import Footer from '../../../Component/Footer';
import '../../../css/Shop/ShopOrder/OrderMain.css';


const OrderMain = ()=> {

    return (
        
        <div className='root'>
            <Header/>
            <div className='order-main'>
                <main className='main-container'>
                    <section className='product-list'>
                        <ul>
                            <li>
                                <div>
                                    <img src='https://www.ocamall.com/shopimages/ocamall/024007002641.jpg?1643870246' alt='제품 이미지'/>
                                    <p className='item-title'>텐트의자</p>
                                </div>
                                <p>
                                    수량 :
                                    <sapn>1</sapn>
                                </p>
                                <p>
                                    상품 금액 :
                                    <sapn>
                                        3,700
                                    </sapn>
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section className='order-info'>
                        <div className='order-form'>
                            <p className='eEOGCf'>주문 정보</p>
                            <form className='form'>
                                <div>
                                    <p>주문자</p>
                                    <div>
                                        <input type='text' className='input'/>
                                    </div>
                                </div>
                                <div>
                                    <p>이메일</p>
                                    <div>
                                        <input type='text' className='input'></input>
                                        <span>@</span>
                                        <select className='input'>
                                            <option value='direct'>직접 입력</option>
                                            <option value='naver.com'>naver.com</option>
                                            <option value='gmail.com'>gmail.com</option>
                                            <option value='yahoo.com'>yahoo.com</option>
                                            <option value='nate.com'>nate.com</option>
                                        </select>
                                        <input type='text' className='direct-input form' placeholder='직접 입력'/>
                                    </div>
                                </div>
                                <div>
                                    <p for>휴대전화</p>
                                    <div>
                                        <input type='number' className='form' maxLength={3}/>
                                        <input type='number' className='form' maxLength={4}/>
                                        <input type='number' className='form' maxLength={4}/>
                                    </div>
                                </div>
                                    <div className='address-form'>
                                        <p for>주소</p>
                                        <div className='address-search'>
                                            <div className='address-num'>
                                                <input type='text' placeholder='우편번호' disabled className='address-number-01 from'/>
                                                    <button type='button'>주소검색</button> 
                                            </div>        
                                                <input type='text' placeholder='기본주소' disabled className='default-address-01 form'></input>
                                                <input type='text' placeholder='상세주소' className='form'></input>
                                        </div>              
                                    </div>     
                            </form>
                            <form className='form'>
                                <p className='eEOGCf'>배송지</p>
                                <div>
                                    <p for>받는사람</p>
                                    <div>
                                        <input type='text'/>
                                    </div>
                                </div>
                                <div className='address-form'>
                                    <p>주소</p>
                                    <div className='address-search'>
                                        <div className='address-num'>
                                            <input type='text' placeholder='우편번호' disabled className='address-number-01 from'/>
                                            <button type='button'>주소검색</button> 
                                        </div>
                                            <input type='text' placeholder='기본주소' disabled className='default-address-01 form'></input>
                                            <input type='text' placeholder='상세주소' className='form'></input>
                                    </div>
                                </div>
                                <div>
                                    <p for>휴대전화</p>
                                    <div>
                                        <input type='number' className='form' maxLength={3}/>
                                        <input type='number' className='form' maxLength={4}/>
                                        <input type='number' className='form' maxLength={4}/>
                                    </div>
                                </div>
                                <div>
                                    <select className='form'>
                                        <option value="none">메시지 선택(선택사항)</option>
                                        <option value="0">부재시 문 앞에 놓고 가주세요.</option>
                                        <option value="1">경비실에 맡겨주세요.</option>
                                        <option value="2">배송전에 문자 주세요.</option>
                                    </select>
                                </div>
                            </form>
                            <p className='eEOGCf'>결제 계좌 선택</p>
                            <p className='select-none-text'>선택 가능한 계좌가 없습니다. 계좌를 등록해주세요.</p>
                            <form className='kpqPRV'>
                                <select name='bankcode' className='bank-select'>
                                    <option value="0">은행 선택</option>
                                    <option value="004">KB국민은행</option>
                                    <option value="088">신한은행</option>
                                    <option value="020">우리은행</option>
                                    <option value="081">하나은행</option>
                                    <option value="089">케이뱅크</option>
                                    <option value="090">카카오뱅크</option>
                                    <option value="011">NH농협은행</option>
                                </select>
                                <p className='select-text'>은행을 선택해 주세요 * 목록에 은행이 보이지 않는다면 전부 등록된 상태입니다.</p>
                            </form>
                        </div>
                        <div className='order-price'>
                            <div className='order-price-info'>
                                <p>
                                    <span>상품 금액 :</span>
                                    3,700
                                    원
                                </p>
                                <p>
                                    <span>배송비 :</span>
                                    무료
                                </p>
                                <p className='order-total-price'>
                                    <span>총 주문금액</span>
                                    :
                                    3,700
                                </p>
                                <button>구매하기</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    )

}

export default OrderMain;