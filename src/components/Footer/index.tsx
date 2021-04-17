import { FaInstagram } from "react-icons/fa";
import { ImFacebook2, ImPinterest } from "react-icons/im";

import { Container } from './styles'

export function Footer() {

	return (
		<Container>
			<div>
				<a
					href="https://www.facebook.com/pedrocs378"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImFacebook2 />
				</a>
				<a
					href="https://br.pinterest.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImPinterest />
				</a>
				<a
					href="https://www.instagram.com/pedrocs378/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
			</div>
			<p>
				Made with 💜 by
				<a
					href="https://github.com/pedrocs378"
					target="_blank"
					rel="noopener noreferrer"
				>
					pedrocs378
				</a>
			</p>
		</Container>
	)
}