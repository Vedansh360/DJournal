import search_icon from '../resources/search_icon.png';

export default function SearchBar() {
    
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search article" />
            <button type="submit"><img src={search_icon} alt="Submit" /></button>
        </form>
    );
}