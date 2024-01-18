import React from 'react';
import Carousel from '../../Component/Carousel/MainPageCarousel';
import Main from './Main';
import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';
import Tent from './Tent';
import Sleeping from './Sleeping';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../Component/Header';


const ShopMain = () => {


    return (
            <div>
                <div>
                <Header/>
                </div>
                <div>
                    <Carousel/>
                </div>
                        <nav>
                            <Nav/>
                            
                        {/*
                            카테고리 자리
                        */}
                        </nav>
                        <Router>
                            <div className='Category'>
                                <Routes>
                                    <Route path='/' element={<Main/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/' element={<CategoryList/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/tent' element={<Tent />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/sleeping' element={<Sleeping />}/>
                                </Routes>
                                
                            </div>
                        </Router>
                    <footer>
                        <div>
                            <Footer />
                        </div>
                    </footer>
            </div>
            
        
    )

}

export default ShopMain;