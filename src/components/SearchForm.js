import React, { useState } from 'react';
import c from '../scss/SearchForm.module.scss'


const SearchForm = ({ handleSubmit }) => {
	const [name, setName] = useState('');
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(name, status, gender)
	}

	return (
		<form className={c.form__container}>
			<div>
				<input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div>
				<select name='status' onChange={(e) => setStatus(e.target.value)} >
					<option value='' disabled selected>Status</option>
					<option value='alive' >Alive</option>
					<option value='Dead'>Dead</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>
			<div>
				<select name='gender' onChange={(e) => setGender(e.target.value)} >
					<option value='' disabled selected>Gender</option>
					<option value='male' >Male</option>
					<option value='female'>Female</option>
					<option value='genderless'>Genderless</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>
			<div>
				<button onClick={onSubmit} >Search</button>
			</div>
		</form>
	);
};


export default SearchForm;