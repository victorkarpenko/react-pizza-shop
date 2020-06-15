import React from 'react';
import './scss/app.scss';

import Header from "./components/Header";
import Filters from "./components/Filters";
import PizzaCard from "./components/PizzaCard";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                       <Filters/>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
