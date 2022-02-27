import { useEffect, useState } from "react";

const Search = ({handleSearch}) => {
    const [locationSearch, setLocationSearch] = useState("");

    const handleSearchChange = (event) => {
        event.preventDefault();
        setLocationSearch(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearch(locationSearch);
        setLocationSearch("");
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Location" value={locationSearch} onChange={handleSearchChange}/>
            <input type="submit" value="Search" />
        </form>
    );
}

export default Search;