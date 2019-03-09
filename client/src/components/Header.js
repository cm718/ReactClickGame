import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size:40px;
    padding: 50px;
    background-color: #333;
    color: white;
    text-align: center;
`

const Header = (props) => {
    return(
        <H2>Don't click an image more than once!</H2>
    )
}

export default Header;