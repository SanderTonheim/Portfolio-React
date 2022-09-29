import styled from 'styled-components'

export const BGStyled = styled.div`
	width: 100%;
	padding: 0;
	max-height: fit-content;

	#flip {
		transform: scaleY(-1);
		translate: (0, -100);
		position: relative;
		top: -5px;
	}
`
