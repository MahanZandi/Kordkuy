import React, { useState, useEffect } from 'react';
import Nav from './nav.jsx';
import Main from './main.jsx';
import Slider from './slider.jsx';
import '../src/style.css';
import './index.css';
import Footer from './footer.jsx';


function App() {
    const [scrollY, setScrollY] = useState(0)

useEffect(() => {
    window.addEventListener('scroll', scrollComponent)
}, [])

function scrollComponent() { setScrollY(window.scrollY)}

    return ( 
        <div>
            <Nav scrollY={scrollY}/>
            <Main scrollY={scrollY }/>
            <Slider scrollY={scrollY}/>
            <Footer scrollY={scrollY}/>
        </div>
     );
}

export default App;