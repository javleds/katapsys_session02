import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

class UserProfile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
			name: 'Javier Ledezma',
		};
	}

	render() {
		const button = this.state.isLoggedIn
			? <button>Salir</button>
			: <button>Ingresar</button>;

		return (
			<div className='user-profile'>
				<Avatar />
				<UserName name={this.state.name}/>
				{button}
			</div>
		);
	}
}

export default UserProfile;
