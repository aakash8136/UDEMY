import React from 'react';
import { Link } from 'react-router-dom';
import './style/AuthorCard.css';
const AuthorCard = (props) => {
	const authors = props.author;
	return (
		<div className="col-md-3" key={authors.key}>
		  <Link to={{ pathname: '/author', state: { author: authors } }} style={{textDecoration:"none"}}>
			<div className="card">
			  <div className="card-body text-center">
				<div className="card-image">
				  <img className="author-image " src={authors.image} alt="author images" />
				</div>
				<div className="card-title">
				  <h5 className="ellipsis">{authors.name}</h5>
				</div>
				<div className="card-topic details">{authors.topics +"."}</div>
				<div className="card-student details">825,462 students</div>
				<div className="card-courses details">26 courses</div>
			  </div>
			</div>
		  </Link>
		</div>
	  );
};

export default AuthorCard;
