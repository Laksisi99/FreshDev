import React from 'react'

import {Link} from 'react-router-dom';
import {FRONTENDLS} from '../data';

const Frontendls = () => {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Frontend Languages</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container content'>
        <div className='row frontend-row'>
          {FRONTENDLS.map((frontendl) => {
            return(
              <div className='col-lg-4' key={frontendl.id}>
                
                <div className='card'>
                  <div className='img-wrap'>
                    <img src={frontendl.image} alt='' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{frontendl.name}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to={`/frontendls/${frontendl.id}`}
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

export default Frontendls
