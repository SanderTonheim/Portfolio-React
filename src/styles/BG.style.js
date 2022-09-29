import styled from 'styled-components'

export const BGStyled = styled.div`
	width: 100%;
	padding: 0;
	max-height: fit-content;

	#flip {
		transform: scaleX(-1);
		transform: rotate(0.5turn);
		/* translate: (0, -100); */
		position: relative;
		top: -5px;
	}
`
