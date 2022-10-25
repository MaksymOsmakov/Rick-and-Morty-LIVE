import React, { useState } from 'react';
import s from '../scss/Paginator.module.scss'


const Paginator = ({
	totalItemsCount,
	pagesCount,
	onPageChanged,
	portionSize = 10 }) => {
	let totalPagesCount = Math.ceil(totalItemsCount / pagesCount);

	let pages = [];
	for (let i = 1; i <= totalPagesCount; i++) {
		pages.push(i);
	}

	let [portionNumber, setPortionNumber] = useState(1);

	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionNumber * portionSize;


	return (
		<div className={s.paginator__wrapper}>
			{portionNumber > 1 &&
				<button className={s.paginator__btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

			{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber).map(p => {
				return <button key={Math.random() * Math.random()} className={s.paginator__btn}
					onClick={() => onPageChanged(p)}>{p}</button>
			})}

			{portionCount > portionNumber &&
				<button className={s.paginator__btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
		</div>
	);
};



export default Paginator;