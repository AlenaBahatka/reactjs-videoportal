import React from 'react';
import injectSheet from 'react-jss'

const styles = {
	label: {
		color: 'red'
	}
}

function NetflixLabel({classes}) {
	return <span className={classes.label}>netflixroulette</span>;
}

export default injectSheet(styles)(NetflixLabel);
