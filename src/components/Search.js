import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.searchBook} action="" className="search">
                <input onChange={props.handleSearch} placeholder="Search"/>
                <button type="submti"><SearchIcon  style={{fontSize: '50px'}}/></button>
                {/* <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">sort</option>
                    <option value="Newest">newest</option>
                    <option value="Oldest">oldest</option>
                </select> */}
            </form>
        </div>
    )
}

export default Search;
