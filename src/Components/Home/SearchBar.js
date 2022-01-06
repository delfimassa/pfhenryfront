import {React, useState} from 'react';
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
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" onChange={(e) => handleOnChange(e)}/>
                <button>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;