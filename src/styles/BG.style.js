import styled from 'styled-components'

export const BGStyled = styled.div`
	width: 100%;
	padding: 0;
	margin: 0;
	position: absolute;
	max-height: fit-content;

	#flip {
		transform: scaleX(-1);
		transform: rotate(0.5turn);
		/* translate: (0, -100); */
		position: relative;
		top: -5px;
		z-index: -1;
		left: 0;
	}
`
