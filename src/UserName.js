import React from "react";
import propTypes from 'prop-types';

const UserName = (props) => {
	return <h1>Hola {props.name}</h1>;
};

UserName.propTypes = {
	name: propTypes.string.isRequired
};

UserName.defaultProps = {
	name: 'Stranger'
};

export default UserName;
