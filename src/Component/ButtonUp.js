import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { CiSaveUp1 } from "react-icons/ci";
import ShopCart from '../pages/shop/ShopCart';
import '../css/Shop/ShopMain.css';
import img1 from '../img/icons8-2-위-원-48.png'
import {Link} from 'react-router-dom';

function SideButton({opacity}){
    const MoveToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    } ;
    
    return (
        <div style={{cursor:'pointer'}} className='btn-up-main'>
            <div opacity={opacity} className="scroll__container">
            <img src={img1}  onClick={MoveToTop} type="button"/> <br/>
            <Link to ="/cart" element="{<ShopCart>}">
                <FaCartArrowDown size={50}  type="button"/> 
            </Link> 
            </div>
        </div>
    );
};
export default SideButton;