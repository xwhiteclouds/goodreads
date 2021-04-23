import React from 'react'

const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} />
                <button type="submti">search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">sort</option>
                    <option value="Newest">newest</option>
                    <option value="Oldest">oldest</option>
                </select>
            </form>
        </div>
    )
}

export default Search;
