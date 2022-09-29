import styled from 'styled-components'

export const BGStyled = styled.div`
	height: 300px;
	width: 100%;
	padding: 0;
	margin: 0;
	position: absolute;

	#flip {
		transform: scaleX(-1);
		transform: rotate(0.5turn);
		/* translate: (0, -100); */
		position: relative;
		top: -0.9rem;
		left: 0;
		object-position: -20px;
	}
`
