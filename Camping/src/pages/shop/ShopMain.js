import React from 'react';
import Carousel from '../../Component/Carousel/MainPageCarousel';
import Main from './Main';
import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';
import Tent from '../../Component/Category/Tent';
import Sleeping from '../../Component/Category/Sleeping';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from '../../Component/Header';
import Kitchen from '../../Component/Category/Kitchen';
import Led from '../../Component/Category/Led';
import Table from '../../Component/Category/Table';
import BBQ from '../../Component/Category/BBQ';




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
                        </nav>
                        <Router>
                            <div className='Category'>
                                <Routes>
                                    <Route path='/home' element={<Main/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/home' element={<CategoryList/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/tent'  element={<Tent />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/sleeping' element={<Sleeping />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/led' element={<Led />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/bbq' element={<BBQ />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/table' element={<Table />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/kitchen' element={<Kitchen />}/>
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