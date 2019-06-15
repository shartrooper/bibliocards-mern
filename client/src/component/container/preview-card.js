import React from 'react';

const PreviewContainer= function (props)
{
	return ( <div id="preview_container">
		<h3 className="card-title">{props.values.title}</h3>
		<img className="avatar-frame" src={props.imagePreview} alt={"Book's avatar"}/>
		<h4 className="card-author">{props.values.author}</h4>
		<div className="card-genre">{props.values.genre}</div>
		<div className="card-release">{props.values.release}</div>
	</div>
	);
}

export default PreviewContainer;