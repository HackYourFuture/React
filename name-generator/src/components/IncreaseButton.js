import React from 'react'
import store from '../store'

export default function IncreaseButton() {
	return (
		<button onClick={increase}>Click me</button>
	)
}

function increase() {
	store.set('counter', store.get('counter') + 1)
}