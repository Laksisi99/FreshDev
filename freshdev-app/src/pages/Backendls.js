import React from 'react'

import {Link} from 'react-router-dom';
import {BACKENDLS} from '../data';

const Backendls = () => {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Backend Languages</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container content'>
        <div className='row frontend-row'>
          {BACKENDLS.map((backendl) => {
            return(
              <div className='col-lg-4' key={backendl.id}>
                
                <div className='card'>
                  <div className='img-wrap'>
                    <img src={backendl.image} alt='' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{backendl.name}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to={`/backendls/${backendl.id}`}
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

export default Backendls
