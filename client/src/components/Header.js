import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size:20px;
    font-family: hand-written;
    padding: 10px;
    background-color: #333;
    color: white;
    text-align: center;
    margin: 0;
`

const Header = (props) => {
    const greeting = 'Only click each image once!';

    return(
        <H2><em>{greeting}</em></H2>
    )
}

export default Header;