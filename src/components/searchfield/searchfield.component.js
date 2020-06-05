import React from "react";

export const Searchfield = (props) => {
	return (
		<div>
			<input
				type='search'
				placeholder='Enter name'
				onChange={props.handleChange}
			/>
		</div>
	);
};
