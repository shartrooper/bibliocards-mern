import React from 'react';

const FormContainer= function (props)
{	
	return (
	<div id="card-form">
			<h2>Create a new card</h2>
			<form onSubmit={props.handleSubmit}>
				<label>
					Title:
					<input type="text" value={props.values.title} onChange={props.handleChange} name="title"  maxLength="40" autoFocus required/>
				</label>
				<label>
					Author:
					<input type="text" name="author" value={props.values.author} onChange={props.handleChange} maxLength="20"  required/>
				</label>
				<label>
					Genre:
					<select name="genre" value={props.values.genre} onChange={props.handleChange} >
							<option value="">--Pick a genre--</option>
							<option value="scifi">Science Fiction</option>
							<option value="thriller">Thriller</option>
							<option value="literature">Literature</option>
							<option value="adventure">Adventure</option>
							<option value="poetry">Poetry</option>
							<option value="Fantasy">Fantasy</option>
							<option value="nonfiction">Non Fiction</option>
					</select>
				</label>
				<label htmlFor="avatar">Upload a book cover picture:</label>
				<input type="file"
					id="avatar" name="avatar" 
					accept="image/png, image/jpeg" onChange={props.handleImageChange}/>
				<label>
					Release date:
					<input type="text" name="release" value={props.values.release} onChange={props.handleChange} maxLength="4"/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	);
}

export default FormContainer;