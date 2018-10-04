import React from 'react';

const SearchComponent = (props) => {
    return ( 
        <div className="SearchComponent">
            <input 
                type="text"
                onChange={(event) => props.handleFunction(event.target.value) }
                value={props.inputValue}
            ></input>
        </div>
     );
}
 
export default SearchComponent;