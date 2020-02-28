import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

class UserProfile extends React.Component {

	constructor(props) {
		super(props);

		this.onLogin = this.onLogin.bind(this);
		this.onLogout = this.onLogout.bind(this);

		this.state = {
			isLoggedIn: false,
			name: 'Javier Ledezma',
		};
	}

	onLogout() {
		this.setState({
			isLoggedIn: false,
			name: undefined
		});
	}

	onLogin() {
		this.setState({
			isLoggedIn: true,
			name: 'Javier L'
		});
	}

	render() {
		return (
			<div className='user-profile'>
				<Avatar />
				<UserName name={this.state.name}/>
				{
					this.state.isLoggedIn
						? <button onClick={this.onLogout}>Salir</button>
						: <button onClick={this.onLogin}>Ingresar</button>
				}
			</div>
		);
	}
}

export default UserProfile;
