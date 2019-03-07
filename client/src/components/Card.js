import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width:200px;
    height:200px;
    object-fit: cover;
    overflow: hidden;
`

const Card = (props) => {
    return(
        <Image src={props.image} />
    )
}

export default Card;