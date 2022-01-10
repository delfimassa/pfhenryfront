import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Cards({peluquerias}) {
    return (peluquerias.map(e =>
        <Link style={{textDecoration: 'none', color: 'black'}}to={`${e._id}`}> 
            <Card 
                name= {e.name}
                address={e.address}
                rating={e.rating}
                avatar={e.avatar}
                schedule={e.schedule}
            />
        </Link>
    ))
}

export default Cards
