import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Nav() {
  return (
    <Router>
      <div>
        <div className='main-category'>
          <div className='contentsWrap'>
            <ul className='clearfix'>
              <li className='f1'>
                <Link to="/tent">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_01.png' alt="텐트 아이콘" />
                  <span>텐트</span>
                </Link>
              </li>
              <li className='f1'>
                <Link to="/sleeping" target='_blank'rel="noopener noreferrer">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_02.png' alt="침낭 아이콘" />
                  <span>침낭</span>
                </Link>
              </li>
              <li className='f1'>
                <Link to="/led">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_04.png' alt="램프 아이콘" />
                  <span>램프</span>
                </Link>
              </li>
              <li className='f1'>
                <Link to="/bbq">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_05.png' alt="화로 아이콘" />
                  <span>화로BBQ</span>
                </Link>
              </li>
              <li className='f1'>
                <Link to="/table">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_03.png' alt="의자 아이콘" />
                  <span>의자</span>
                </Link>
              </li>
              <li className='f1'>
                <Link to="/kitchen">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_06.png' alt="키친 아이콘" />
                  <span>키친</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Nav;
