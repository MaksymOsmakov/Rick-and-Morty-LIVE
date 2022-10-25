import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AllCharacters from "./pages/AllCharacters";
import NotFoundPage from "./pages/NotFoundPage";
import SearchCharacters from "./pages/SearchCharacters";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<AllCharacters />} />
				<Route path="search" element={<SearchCharacters />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
