import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media(max-width: 568px){
        height:auto;
        flex-direction:column;
        justify-content: centre;
        align-items: center;
     }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media(max-width: 568px){
        padding:10px;
     }

`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media(max-width: 568px){
        flex-direction:column;
        
     }

`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// export const Watermark = styled.div`
//     position:fixed;
//     top:50%;
//     left:200px;
//     opacity:0.5;
//     z-index:99;
//     color:black;
//     font-size:50px;
//     white-space: nowrap;


//     @media(max-width: 568px){
//        font-size:10px;
//        top:50%;
//        left:30%;
//        white-space: nowrap;
//     }
    
//`;
