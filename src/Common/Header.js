import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header style={getHeaderStyle}>
            <h1>AMR TODO APP</h1>
            <Link style={linkStyle} to="/">Home</Link><span> | </span>
            <Link style={linkStyle} to="/about">about</Link>
        </header>
    );
}
const getHeaderStyle = {
    background: '#007bff',
    textAlign: 'center',
    padding: '10px',
    color: '#fff'
}

const linkStyle = {
    color: "#fff",
    TextDecoder: 'none'
}
export default Header;
