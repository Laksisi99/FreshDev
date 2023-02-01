import React from 'react'

import {Link} from 'react-router-dom';
import {FULLSTACKLS} from '../data';

const Fullstackls = () => {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Stacks</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container content'>
        <div className='row frontend-row'>
          {FULLSTACKLS.map((fullstackl) => {
            return(
              <div className='col-lg-4' key={fullstackl.id}>
                
                <div className='card'>
                  <div className='img-wrap'>
                    <img src={fullstackl.image} alt='' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{fullstackl.name}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to={`/fullstackls/${fullstackl.id}`}
                        className='btn btn-primary btn-sm'
                      >Learn More </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </main>
  )
}

export default Fullstackls
