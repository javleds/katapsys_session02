import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

class UserProfile extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: true,
			name: 'Javier Ledezma',
		}
	}

	render() {
		return (
			<div className='user-profile'>
				<Avatar />
				<UserName name={this.state.name}/>
				<button>Ingresar</button>
			</div>
		)
	}
}

export default UserProfile;
