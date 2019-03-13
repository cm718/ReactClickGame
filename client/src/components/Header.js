import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size:32px;
    font-weight: 700;
    padding: 15px;
    background-color: #333;
    color: white;
    text-align: center;
    margin-top: 50px;
`

const Header = props => {
    return(
        <H2>{props.message}</H2>
    )
}

export default Header;