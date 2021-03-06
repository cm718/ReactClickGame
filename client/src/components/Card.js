import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    // width:150px;
    height:150px;
    object-fit: cover;
    overflow: hidden;
    border: 2px solid #333;
    border-radius: 6px;
`

const Card = props => {
    return(

        <div className='col l3 m3 s4 xs4'>
            <div className='card'>
                <div className='card-image'>
                     <Image onClick={props.handleClick} src={props.image}/>
                </div>            
            </div>
        </div>
        
    )
}

export default Card;