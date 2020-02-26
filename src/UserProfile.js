import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

const UserProfile = () => {
	return (
		<div className='user-profile'>
			<Avatar />
			<UserName name='Oscar M Sanchez' />
			<button>Ingresar</button>
		</div>
	);
};

export default UserProfile;
