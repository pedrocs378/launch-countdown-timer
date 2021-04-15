import { FaInstagram } from "react-icons/fa";
import { ImFacebook2, ImPinterest } from "react-icons/im";

import { Container } from './styles'

export function Footer() {

	return (
		<Container>
			<a href="">
				<ImFacebook2 />
			</a>
			<a href="">
				<ImPinterest />
			</a>
			<a href="">
				<FaInstagram />
			</a>
		</Container>
	)
}