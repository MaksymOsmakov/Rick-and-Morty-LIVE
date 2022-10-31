import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import Paginator from '../components/Paginator';
import SearchForm from '../components/SearchForm';
import { useLazySearchByQueryQuery } from '../store/CharactersApi';


const SearchCharacters = () => {
	const [page, setPage] = useState();
	const [name, setName] = useState('');
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [fetchCharacters, { isError, isLoading, data }] = useLazySearchByQueryQuery(page)

	const searchCharacters = (name, status, gender) => {
		setPage(1)
		setName(name)
		setStatus(status)
		setGender(gender)
		fetchCharacters({ page, name, status, gender })
	}

	const handleChanged = (p) => {
		setPage(p)
	}

	useEffect(() => {
		if (page >= 1)
			fetchCharacters({ page, name, status, gender })
	}, [fetchCharacters, gender, name, page, status]);

	const pagesCount = () => {
		let count = 10
		if (data) {
			if (count > data.info.pages) {
				count = data.info.pages
				return count
			}
		}
		return count
	}
	let pagesCountForPaginator = pagesCount()
	return (
		<>
			<SearchForm handleSubmit={searchCharacters} />

			{isError && <p style={{ color: "red", fontSize: '2em', textAlign: 'center' }}>Something wrong...Try with other params</p>}
			{isLoading && <p style={{ fontSize: '2em', textAlign: 'center' }}>Loading...</p>}

			{data && <CharacterCard person={data.results} info={data.info} />}
			{data && <Paginator onPageChanged={handleChanged} pagesCount={data.info.pages} portionSize={pagesCountForPaginator} totalItemsCount={data.info.count} key={data.info} />}
		</>
	);
};


export default SearchCharacters;
