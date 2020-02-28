import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

class UserProfile extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='user-profile'>
				<Avatar />
				<UserName name='Javier Ledezma'/>
				<button>Ingresar</button>
			</div>
		)
	}
}

export default UserProfile;
