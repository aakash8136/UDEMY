import React from 'react';

const SubHeader = () => {
	return (
        <div className="container" style={{marginLeft:320,marginRight:320}}>
        <div className="row">
    
        <div className="card">
        <div className="card-body text-center">Development </div></div>
        <div className="card">
        <div className="card-body text-center">Web Development </div></div>
        <div className="card">
        <div className="card-body text-center"> Data Science</div></div>
        <div className="card">
        <div className="card-body text-center"> Mobile Apps</div></div>
        <div className="card">
        <div className="card-body text-center"> Programming Languages</div></div>
        <div className="card">
        <div className="card-body text-center"> Game Development</div></div>
        <div className="card">
        <div className="card-body text-center"> Databases</div></div>
        </div>
        </div>


//         class SubHeader extends React.Component {

//             render() {
//                 const categories = this.props.Technologies;
// 		return (
           
// <div className="container">
// 				<div className="row">
// 					{categories.map((category, i) => {
// 						return category.sub-category.map((topic, i) => (
// 							<div className="col-sm-3" key={i}>
// 								<div className="card">
// 									<div className="card-body topic text-center">{topic}</div>
// 								</div>
// 							</div>
// 						));
// 					})}
// 				</div>
// 			</div>
		);
    }

    export default SubHeader;