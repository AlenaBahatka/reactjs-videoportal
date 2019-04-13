import React from 'react';

function FilterOption(props) {
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
