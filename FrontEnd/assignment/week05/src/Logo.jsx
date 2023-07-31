import React from 'react';
import styled from "styled-components";

const StyledLogo = styled.p`
    padding: 10px 10px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 5px;
    color: hotpink;
    background-color:gray;
`;

const Logo = () => {
    return (
        <StyledLogo>🐾JOOEUN's COMMUNITY✨</StyledLogo>
    );
};

export default Logo;