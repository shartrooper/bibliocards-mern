import React from 'react';
import { Link } from 'react-router-dom';
const MainPage= function (props)
{
	return(<div id="main-container">
		<h2 id="main_title">Bibliography cards App <i className="fas fa-book"></i></h2>
		<div className="buttons-container">
			<Link to={'/create'}><button className="route-bt">CREATE CARD</button></Link>
			<button className="route-bt">SEARCH APP</button>
			<button className="route-bt">EDIT OR DELETE A CARD</button>
		</div>
	</div>);
}

export default MainPage;