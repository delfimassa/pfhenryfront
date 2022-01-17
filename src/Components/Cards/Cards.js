import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import  "./Card.css"

// dipatch getPeluqueriaById(id)
// useSelector me complete el estado selectedPelu
// desde card mostrar la data de ese estado

function Cards({peluquerias}) {

    return (peluquerias.map(e =>
        <Link style={{textDecoration: 'none', color: 'black'}} to={`/${e._id}`}> 
            <Card 
                id={e._id}
                name= {e.name}
                address={e.address}
                city={e.city}
                state={e.state}
                rating={e.rating}
                avatar={e.avatar}
                schedule={e.schedule}
                phone={e.phone}
            />
        </Link>
    ))
}

export default Cards
