import React from 'react'

export default class PersistedComponent extends React.Component {

	componentWillMount() {
		const persistedState = load()
		if (persistedState != null) {
			this.state = persistedState
		}
	}

	setState(state) {
		super.setState(state)
		save(state)
	}

}

function load() {
	const json = window.localStorage.appState
	if (json == null) { return null }

	return JSON.parse(json)
}

function save(state) {
	window.localStorage.appState = JSON.stringify(state)
}