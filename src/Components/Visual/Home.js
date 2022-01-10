import React, { useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Cards from '../Cards/Cards'
import Card from '../Cards/Card';
import SearchBar from '../Home/SearchBar';
import FilterPanel from './FilterPanel';
import { getPeluquerias } from '../../Redux/actions/peluqueria';
import './Home.css';
import { connect } from 'react-redux';

function Home({getPeluquerias, peluquerias}) {
    useEffect(() => {
        getPeluquerias()
    },[getPeluquerias])

    return (
        <div>
            <SearchBar />
            <div className='container-home'>
            <FilterPanel /> 
            <div className='cards-container'>
                <Cards peluquerias={peluquerias} /> 
            </div>
            </div>
        </div>
    )
}
 //agregar algo para q las cards bajen a partir de cierto punto
function mapStateToProps(state){
    return{
        peluquerias: state.allPeluquerias,
        orden: state.orden
    }
}

export default connect(mapStateToProps, {getPeluquerias})(Home)