import React from 'react'
import './UserProfile.css'

const UserProfile = ({ link, userName, text, profile_picture, followers, following, posts }) => {
	return (
		<div className="card card-profile text-center">
		<a href={link} target="_blank" style={{textDecoration: 'none', color: '#000'}}>
			<img 
				className="card-img-top" 
				src="https://picsum.photos/340/160/?random"
			/>
			<div className="card-block">
				<img 
					className="card-img-profile" 
					src={profile_picture}
				/>
				<h4 className="card-title">
					{text}
					<small><span className="badge badge-pill badge-warning">{ userName }</span></small>
					<small><span className="badge badge-pill badge-primary">Followers { followers }</span></small>
  				<small><span className="badge badge-pill badge-info">Following { following }</span></small>
  				<small><span className="badge badge-pill badge-success">Posts { posts }</span></small>
				</h4>
			</div>
			</a>
		</div>
	)
}



export default UserProfile