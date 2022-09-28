import { StyledHeaderContainer } from '../styles/Header.styled'
import { HeaderImage } from './HeaderImg'
import { HeaderText } from './HeaderText'
export const Header = () => {
	return (
		<>
			<StyledHeaderContainer>
				<h1>
					Portfolio <br />
					Sander Tonheim
				</h1>
				<HeaderImage />
				<HeaderText />
			</StyledHeaderContainer>
		</>
	)
}
