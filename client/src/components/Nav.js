import React from 'react';
import styled from 'styled-components';


const H1 = styled.h1 `
    font-size: 3em;
    font-family: Permanent Marker;
    background-color: #333;
    color: white;
    padding: 15px;
    position: top;
    display: block;
    position: absolute;
    top: -50px;
    width: 100%;
    margin-bottom: 100px;
`
const H2 = styled.h2 `
    font-size: 35px;
    padding: -20px;
    font-family: Permanent Marker;
    background-color: #333;
    color: white;
    padding-bottom: 15px;
    position: relative;
    top: 35px;
`

const navStyle = {
    background: '#333',
};

const Nav = props => {
    return(
        <div style={navStyle}>
            <H1>Thundercats</H1>
            <H2>Memory Game</H2>
        </div>
    )
}

export default Nav;