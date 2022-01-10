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
            <div>
            <h1>Encontrá tu peluquería donde sea que estes!</h1>
            </div>
            <form class="d-flex" onSubmit={(e) => handleOnSubmit(e)}>
                <input class="form-control input-search" type="text" placeholder="Search" onChange={(e) => handleOnChange(e)} />
                <select style={{outline: 'none', width:'200px'}} class="me-sm-2">
                    <option name="ciudad">Ciudad</option>
                    <option name="servicio">Servicio</option>
                </select>
                <button type="submit" class="btn btn-primary my-2 my-sm-0">Search</button>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit"></button>
            </form>
        </div>
    );
};

export default SearchBar;