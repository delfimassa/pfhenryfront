import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Cards({peluquerias}) {
    return (peluquerias.map(e =>
        <Link style={{textDecoration: 'none', color: 'black'}}to={`/detallepeluqueria/${e._id}`}> 
            <Card 
                name= {e.name}
                address={e.address}
                city={e.city}
                state={e.state}
                rating={e.rating}
                avatar={e.avatar}
                schedule={e.schedule}
            />
        </Link>
    ))
}

export default Cards
