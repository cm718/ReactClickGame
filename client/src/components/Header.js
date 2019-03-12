import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size:20px;
    font-weight: 700;
    padding: 15px;
    background-color: #333;
    color: white;
    text-align: center;
    margin-top: 0;
`

const Header = props => {
    return(
        <H2><em>{props.message}</em></H2>
    )
}

export default Header;