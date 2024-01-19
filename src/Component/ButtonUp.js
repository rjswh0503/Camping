import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { CiSaveUp1 } from "react-icons/ci";
import ShopCart from '../pages/shop/ShopCart';
import '../css/Shop/ShopMain.css';
import img1 from '../img/icons8-2-위-원-48.png'


function SideButton({opacity}){
    const MoveToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    } ;
    
    return (
        <div className='btn-up-main'>
            <div opacity={opacity} className="scroll__container">
            <img src={img1}  onClick={MoveToTop} type="button"/> <br/>
            <FaCartArrowDown size={50} Link to="/shopcart" element={<ShopCart/>} type="button"/>
            </div>
        </div>
    );
};
export default SideButton;