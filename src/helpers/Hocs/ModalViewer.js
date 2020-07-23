import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: ${props => (props.width ? props.width : '')};
	height: ${props => (props.height ? props.height : '')};
    z-index: ${props => (props.zIndex ? props.zIndex : '')};
    background-color:#ffffff;
    position:fixed;
    top:calc(50% - 300px);
    left:calc(50% - 600px);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    border-radius:5px;
    padding:50px;
    transform: translate(calc(50% - 600px));
`;

const ModalViewer = ({ children, customStyles }) => (
	<Container className="ListingDropDown padding-20 bg-white" width="1200px" height="600px" zIndex={200} style={customStyles}>
		{children}
	</Container>
);

export default ModalViewer;