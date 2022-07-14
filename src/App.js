import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar.view';
import Home from './pages/home/home.view.js';
import Detail from './pages/detail/detail.view.js'
import { HOME, DETAIL } from './routes/routes.js';
import { Suspense } from 'react';


const App = () => {


    return (
        <Suspense fallback="...is loading">
            <BrowserRouter>
                <div className='router-div'>
                    <Navbar/>
                    <div className='web-div'>
                        <Routes>
                            <Route exact path={ HOME } element={ <Home /> } />
                            <Route path={ DETAIL } element={ <Detail /> } />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>

    );
}

export default App;
