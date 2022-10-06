import React from 'react'
import { useState } from 'react';
import "./Progress.css"
function Progress(props) {
    const { bgcolor, completed } = props;
    const [value, setState] = useState(0)
    const handleChange = (e) => {
        setState(e.target.value)
    }
    const containerStyles = {
        height: 20,
        width: '100%',
        position: 'relative',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,

    }

    const fillerStyles = {
        height: '100%',
        position: "relative",

        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        backgroundColor: "#000",
        color: 'white',
        fontWeight: 'bold'
    }

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