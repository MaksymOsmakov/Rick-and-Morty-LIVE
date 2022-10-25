import React from 'react';
import s from '../scss/CharacterCard.module.scss'

const CharacterCard = ({ person }) => {
	return (
		<div className={s.card__wrapper}>
			<div className={s.info}>
				<span>Photo</span>
				<span>Name</span>
				<span>Gender</span>
				<span>Status</span>
				<span>Location</span>
			</div>
			{person.map(p => <div key={p.id} className={s.card}>
				<img src={p.image} alt="avatar" />
				<span>{p.name}</span>
				<span>{p.gender}</span>
				<span>{p.status}</span>
				<span>{p.location.name}</span>
			</div>)}
			
		</div>
	);
};


export default CharacterCard;