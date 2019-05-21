// @flow
import React from 'react';

type FilterOptionPropTypes = {
	optionName: string,
	checkedOption: string,
	name: string,
	displayName: string,
	handleOptionChange: Function
}

function FilterOption(props: FilterOptionPropTypes) {
	return (
		<label>
			<input
				type="radio"
				name={props.optionName}
				checked={props.checkedOption === props.name}
				value={props.name}
				onChange={(event) => props.handleOptionChange(event.target.value)}
			/>
			<span>{props.displayName.toUpperCase()}</span>
		</label>
	);
}

export default FilterOption;
