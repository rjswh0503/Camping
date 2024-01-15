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
                <Link to="/sleeping">
                  <img src='https://www.ocamall.com/design/ocamall/2022_renew/img/main_category_icon_02.png' alt="침낭 아이콘" />
                  <span>침낭</span>
                </Link>
              </li>
              {/* 필요한 만큼 리스트 아이템을 추가하세요 */}
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Nav;
