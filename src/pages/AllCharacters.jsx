import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import Paginator from '../components/Paginator';
import { useLazyGetAllCharactersQuery } from '../store/CharactersApi';


const AllCharacters = () => {
	const [page, setPage] = useState(1);
	const [fetchCharacters, { isError, data, isLoading }] = useLazyGetAllCharactersQuery(page);
	useEffect(() => {
		fetchCharacters(page)
	}, [page, fetchCharacters]);

	const handleChanger = (p) => {
		setPage(p)
	}

	return (
		<div>
			{isError && <p style={{ color: "red", fontSize: '2em', textAlign: 'center' }}>Something wrong...</p>}
			{isLoading && <p style={{ fontSize: '2em', textAlign: 'center' }}>Loading...</p>}


			{data &&
				<CharacterCard person={data.results} />
			}

			{data &&
			<div style={{ marginTop: "33px" }}>
				<Paginator  onPageChanged={handleChanger} pagesCount={data.info.pages} portionSize={10} totalItemsCount={data.info.count} key={data.info.pages} />
			</div>
			}
		</div>
	);
};


export default AllCharacters;