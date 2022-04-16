import React from 'react';
import { Boost, Features1, Features2, Features3, Footer, Header, Navbar, News, Plans, Sponsors, Subscripe } from './components'
import './App.scss';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Boost />
            <Features1 />
            <Features2 />
            <Features3 />
            <Plans />
            <Sponsors />
            <News />
            <Subscripe />
            <Footer />
        </React.Fragment>
    )
}

export default App