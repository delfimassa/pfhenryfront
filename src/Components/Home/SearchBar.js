import { React, useState } from 'react';
import { useDispatch } from 'react-redux';


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(console.log(search)) // con dispatch usar la function que viene desde actions
    }
    function handleOnChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div>
            <form class="d-flex" onSubmit={(e) => handleOnSubmit(e)}>
                <input class="form-control me-sm-2" type="text" placeholder="Search" onChange={(e) => handleOnChange(e)} />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;