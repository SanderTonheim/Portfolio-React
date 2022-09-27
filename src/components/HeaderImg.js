import { ImageContainer } from '../styles/HeaderImg.styled'
import Image from '../assets/PortfolioPic1.jpg'
export const HeaderImage = () => {
	return (
		<ImageContainer>
			<img src={Image} />
		</ImageContainer>
	)
}
