import React from 'react'

export default class LinkButton extends React.Component {

  // label: string
  // onClick: function
  // disabled: boolean

  handleClick = event => {
    event.preventDefault();

    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    let className = 'linkButton'
    if (this.props.disabled) {
      className += ' linkButton-disabled'
    }

    return (
      <a
		href="#"
        className={className}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {this.props.label}
      </a>
    )
  }

}