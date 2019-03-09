import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size:20px;
    padding: 10px;
    background-color: #333;
    color: white;
    text-align: center;
`

const Header = (props) => {
    return(
        <H2><em>Don't click the same image twice!</em></H2>
    )
}

export default Header;