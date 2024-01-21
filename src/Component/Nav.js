import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tent from '../Component/Category/Tent';
import Sleeping from '../Component/Category/Sleeping';
import Kitchen from '../Component/Category/Kitchen';
import Led from '../Component/Category/Led';
import Table from '../Component/Category/Table';
import BBQ from '../Component/Category/BBQ';
import Main from '../pages/shop/Main';
function Nav( ) {
  return (
   
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
                <Link to="/sleeping" rel="noopener noreferrer">
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
        <Routes>
              <Route path='/' element={<Main/>} />
          </Routes>
          
          <Routes>
            <Route path='/tent' element={<Tent/>} />
            </Routes>

            <Routes>
            <Route path='/sleeping' element={<Sleeping/>} />
            </Routes>

            <Routes>
            <Route path='/led' element={<Led/>} />
            </Routes>

            <Routes>
            <Route path='/bbq' element={<BBQ/>} />
            </Routes>

            <Routes>
            <Route path='/table' element={<Table/>} />
            </Routes>

            <Routes>
            <Route path='/kitchen' element={<Kitchen/>} />
          </Routes>
      </div>
  );
}

export default Nav;
