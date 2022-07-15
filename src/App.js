import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar.view';
import Home from './pages/home/home.view.js';
import User from './pages/user/user.view.js'
import { HOME, DETAIL, USER } from './routes/routes.js';
import { Suspense } from 'react';
import Details from './pages/details/details.view';


const App = () => {

    return (
        <Suspense fallback="...is loading">
            <BrowserRouter>
                <div className='router-div'>
                    <Navbar/>
                    <div className='web-div'>
                        <Routes>
                            <Route exact path={ HOME } element={ <Home /> } />
                            <Route path={ USER } element={ <User /> } />
                            <Route path={ DETAIL } element={ <Details /> } />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>

    );
}

export default App;
