import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import GlobalStorage from '../../../Storage/ContextProvider';
import "./Progress.css"
function Progress(props) {
    const { Bgcolor, setBgcolor } = useContext(GlobalStorage);
    const [value, setState] = useState(0)
    const handleChange = (e) => {
        setState(e.target.value)
        setBgcolor(e.target.value)
    }
    console.log(Bgcolor);
    return (
        <div className='containerStyles'>
            <div className='colorBg'>
                <div className='div1'></div>
                <div className='div2'></div>
                <div className='div3'></div>
                <div className='div4'></div>
                <div className='div5'></div>
                <div className='div6'></div>
                <div className='div7'></div>
                <div className='div8'></div>
                <div className='div9'></div>
                <div className='div10'></div>
            </div>
            <input id="typeinp"
                type="range"
                className='slider'
                min="0" max="10"
                value={value}
                onChange={handleChange}
                step=".1" />
        </div>
    );
};

export default Progress