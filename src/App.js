import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import NavbarTop from './components/NavbarTop';
import IpsumContainer from './components/IpsumContainer';
import { generateText } from './components/generateText/generateText';
import Abite from './components/Abite';
import Links from './components/Links';

class App extends Component {

	constructor() {
		super();
		this.state = {
			text: generateText(3, 4, 7),
			paragraphs: 3,
			minSentences: 4,
			maxSentences: 7
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<Container className="justify-content-md-center">
				<div className="container-fluid text-justified text-md-left">
					<NavbarTop />
					<IpsumContainer
						text={this.state.text}
						paragraphs={this.state.paragraphs}
						minSentences={this.state.minSentences}
						maxSentences={this.state.maxSentences}
					/>
					<Abite />
					<Links />
				</div >
			</Container>
		);
	}
}

export default App;
