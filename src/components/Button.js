import styled from 'styled-components';


export const ButtonContainer = styled.button`
	text-transform:capitalize;
	font-size:1.2rem;
	background:transparent;
	border: solid 1px var(--lightBlue);
	border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	color: var(--lightBlue);
	color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	margin-right: 0.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: var(--lightBlue);
		background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
		color: var(--mainBlue);
	}
	&:focus{
		outline: none;
	}
`;