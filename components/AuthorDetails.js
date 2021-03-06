import React from 'react';
import './style/AuthorDetails.css';
import * as FontAwesome from 'react-icons/lib/fa'
class AuthorDetails extends React.Component {
   
	render() {
        const  {author} = this.props.location.state;
      
		return (
			<div>
				<div className="header-content">
					<div className="container">
						<div className="header">
							<div>
								<h1>{author.name}</h1>
								<h2>{author.title}</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="author-profile">
					<div className="container">
						<div className="row">
							<div className="col-sm-3">
								<div className="image">
									<img
										src={author.image}
										alt="author-profile"
										className="author-image"
										style={{ width: 120, height: 120 }}
									/>
								</div>
								<div className="instructor--social">
									<div className="social__link">
                                    <FontAwesome.FaGlobe className="link" />
                                    <FontAwesome.FaTwitter className="link"  />
                                    <FontAwesome.FaYoutube  className="link" />
                                   
									</div>
								</div>
							</div>
							<div className="col-sm-9">
								<div className="full-biography">
									<p>{author.description.intro}</p>
                                    <p>{author.description.skills}</p>
                                    <p>{author.description.important}</p>

								</div>
								<ul className="instructor-stats">
									<li>
										<div className="small">Total students</div>
										<div className="a2">825,462</div>
									</li>
									<li>
										<div className="small">Courses</div>
										<div className="a2">26</div>
									</li>
									<li>
										<div className="small">Reviews</div>
										<div className="a2">297,238</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthorDetails;
