import { StyledHeaderContainer } from '../styles/Header.styled'
import { ImageContainer } from '../styles/HeaderImg.styled'
import { HeaderImage } from './HeaderImg'

export const Header = () => {
	return (
		<StyledHeaderContainer>
			<h1>Portfolio</h1>
			<HeaderImage></HeaderImage>
		</StyledHeaderContainer>
	)
}
