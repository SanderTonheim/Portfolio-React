import styled from 'styled-components'

export const WaveAnimation = styled.div`
	.ocean {
		height: 5rem;
		width: 100%;
		position: relative;
		background: #015871;
	}

	.wave {
		background: url(../assets/experience-background.svg) repeat-x;
		position: absolute;
		top: -198px;
		width: 6400px;
		height: 198px;
		animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
		transform: translate3d(0, 0, 0);
	}

	.wave:nth-of-type(2) {
		top: -175px;
		animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
			swell 7s ease -1.25s infinite;
		opacity: 1;
	}

	@keyframes wave {
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: -1600px;
		}
	}

	@keyframes swell {
		0%,
		100% {
			transform: translate3d(0, -25px, 0);
		}
		50% {
			transform: translate3d(0, 5px, 0);
		}
	}
`
