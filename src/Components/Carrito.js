import React from 'react';

const Carrito = () => {
    return (
        <div className='container'>
            <h2>prueba mp</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'> 
                            <h3>turno pelu</h3>
                        </div>
                        <div className='card-body'>
                            <p>Corte y barba</p>
                            <p>Precio $800</p>
                            <div>
                                <form action='http://localhost:4000/MP/create' method='POST'>
                                    <input type='hidden' value='1' name='price'/>
                                    <input type='hidden' value='Corte y barba' name='title'/>
                                    <input type='submit' value='comprar' className='btn btn-primary'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Carrito;