import React from 'react'
import PropTypes from 'prop-types'

const Message = ({input, player}) => (
	<p> 
		<i>{player}</i>: {input}
	</p>
	)

Message.propTypes = {
	input: PropTypes.string.isRequired,
	player: PropTypes.string.isRequired
}

export default Message