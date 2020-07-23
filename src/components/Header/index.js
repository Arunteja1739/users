import React from 'react';
import styled from 'styled-components';


const Head = styled.div`
    height:100px;
    width:100%;
    background-color:#8244c9;
    position:fixed;
    top:0;
    left:0;
    margin-bottom:20px
`;


const Header = ()=>(
    <Head className="frow center f-space-between">
        <div>
            Users
        </div>
        <div />
    </Head>
)

export default Header;