import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header style= {headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to = "/">Home</Link> | <Link style={linkStyle} to = "/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#487E6D',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    margin: '10px 150px'
}

const linkStyle = {
    color: '#fff'
}

export default Header;