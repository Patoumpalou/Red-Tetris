import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { test }  from "../containers/UpdateGrid";

const Chrono = (props) => {
	let i = 0;

	setInterval(() => {
		// if(props.time.gameStatus === 'on'){
			if(i >= 4 ){
				props.incrementY()
			}
			props.updateTime(i)
			i++;
		// }
	
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
