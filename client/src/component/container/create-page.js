import React from 'react';
import { Link } from 'react-router-dom';
import Form from './create-form';
import Previewer from './preview-card';
import useForm from '../custom hooks/formHook';

const CreatePage = function (props) {
	
	const {handleChange,previewer_img, handleSubmit, values, handleImageChange } = useForm();
	
	return (<div id="card-creation">
		<Form handleChange={handleChange} handleSubmit={handleSubmit} values={values} handleImageChange={handleImageChange} />
		<Previewer values={values} imagePreview={previewer_img}/>
		<Link to={'/'}><button className="route-bt">BACK</button></Link>
	</div>);
}



export default CreatePage;