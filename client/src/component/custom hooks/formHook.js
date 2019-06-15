import { useState} from 'react';


const useForm= () =>
{
	const [values,setValues]=useState({});
	const [previewer_img,setImage]=useState('');
	
		const handleSubmit = (event) => {
			event.preventDefault();
			if((values.title && /\S+/g.test(values.title)) && (values.author && /\S+/g.test(values.author)))
			{
				
			}
			else
			{
				alert('PLEASE SUBMIT BOOK TITLE AND AUTHOR')
			}
		};

		const handleChange = (event) => {
			event.persist();
			const parseValue= (name,value)=>
			{
				return (name === "author"? ((val)=>{val=val.match(/[a-z\s]/gi); return val?val.join(''): '';})(value)
				: name === "release"? ((val)=>{val=val.match(/^\d{1,4}/);  return val? val.join(''): '';})(value): value);
			}
			setValues({ ...values, [event.target.name]: parseValue(event.target.name,event.target.value) });
		};
		
		const handleImageChange= (event) => {
			event.persist();
			let reader= new FileReader();
			let file= event.target.files[0];
			setValues({...values, [event.target.name]: file});
			reader.onloadend = () => {
				setImage(reader.result);
			}
			reader.readAsDataURL(file);
		}
		
	return {
		handleSubmit,
		handleChange,
		handleImageChange,
		values,
		previewer_img
	};
}



export default useForm;