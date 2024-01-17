import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopDetail from './ShopDetail';



const ShopMore = () => {



    return(
        
        <div>
            <ShopDetail/>
            <div className='shopmore-first'>
                <div className='shopmore-description'>
                    <div className='shopmore-description-div'>
                        <div className='shopmore-description-div2'>
                            <div className='shopmore-description-goods'>
                             <div className='shopmore-description-intro'>  
                                <div className='shopmore-description-pic'>
                                    <img src='https://www.ocamall.com/shopimages/ocamall/0240070026412.jpg?1643870246'/>
                                </div> 
                                <div className='context'>
                                    <h3>
                                        <small>휴대성과 편안함의 완벽한 조합, 최고급 캠핑 의자</small>
                                        [캠핑의자]
                                        <br/>
                                        최고급 캠핑 의자
                                        <br/>  
                                    </h3>
                                    <p className='words'>
                                    휴대성과 편안함의 완벽한 조합, 최고급 캠핑 의자
                                    </p>    
                                </div> 
                            </div>   
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShopMore;