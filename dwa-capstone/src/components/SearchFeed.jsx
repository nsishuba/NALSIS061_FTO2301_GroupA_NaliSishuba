
const SearchFeed = (prop) => {
    return (
        <div className="col col-sm-4">
            <span>Search...</span>
            <input
            value={prop.searchValue}
            onChange={(event) => prop.setSearchValue(event.target.value)}></input>
           
        </div>
    )
}

export default SearchFeed