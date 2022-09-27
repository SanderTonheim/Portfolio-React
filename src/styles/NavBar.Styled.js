import styled from 'styled-components'

export const StyledNavBar = styled.div`
	height: 4rem;
	width: 100%;
	background-color: #323030;
	color: white;

	ul {
		display: flex;
		flex-direction: row;
		height: 100%;
		justify-content: space-around;
		align-items: center;
	}

	li {
		border: 2px solid white;
		padding: 0.2rem 1rem;
		list-style-type: none;
	}
`
