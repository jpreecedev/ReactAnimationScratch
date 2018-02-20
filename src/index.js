import React, { Component } from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import { CSSTransitionGroup } from 'react-transition-group'

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
	border: '1px solid black'
}

const title = {
	flexGrow: 1,
	margin: 0,
	padding: 10
}

const header = {
	display: 'flex'
}

const icon = {
	padding: 10
}

const close = {
	padding: 10
}

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isVisible: false
		}

		this.clickMe.bind(this)
	}

	clickMe() {
		this.setState({
			isVisible: !this.state.isVisible
		})
	}

	render() {
		return (
			<div style={styles}>
				<div style={header}>
					<span style={icon}>Icon</span>
					<p style={title}>Title</p>
					<button onClick={() => this.clickMe()}>Toggle</button>
				</div>
				<CSSTransitionGroup
					transitionName="timeslot"
					component="div"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}>
					<div key={'thing' + this.state.isVisible}>
						{this.state.isVisible && (
							<div>
								<div className="timeslot-container">
									<Hello name="CodeSandbox" />
									<h2>Start editing to see some magic happen {'\u2728'}</h2>
								</div>
							</div>
						)}
					</div>
				</CSSTransitionGroup>
			</div>
		)
	}
}

render(<App />, document.getElementById('root'))
