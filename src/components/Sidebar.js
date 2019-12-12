import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = (props) => {
    let input

    return (
        <div className="flex-column-center" id="sidebar">
            <h1>{props.time.value}</h1>
        </div> 
    )
}

export default Sidebar