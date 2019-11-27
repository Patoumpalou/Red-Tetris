import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { test }  from "../containers/UpdateGrid";

const Chrono = (props) => {
	let i = 0;

	setInterval(() => {

		// console.log(i)
		if(i >= 4 ){
			// console.log('incrementy')
			props.incrementY()
		}
		props.updateTime(i)
		i++;
	}, 1000);
    return (
        <section id="chrono">
		</section>
    )
}

Chrono.propTypes = {
	updateTime: PropTypes.func.isRequired,
	incrementY: PropTypes.func.isRequired
}
export default Chrono