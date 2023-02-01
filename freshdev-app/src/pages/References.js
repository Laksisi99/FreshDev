import React from 'react'

import {REFERENCES} from '../data';


const References = () => {
  return (
    <main>
    <div className='pg-header'>
      <div className='container'>
        <h1>References for you</h1>
      </div>
    </div>
    <div className='container content'>
        <div className='row frontend-row'>
          {REFERENCES.map((reference) => {
            return(
              <div className='col-lg-4' key={reference.id}>
                
                <div className='card'>
                  <div className='img-wrap'>
                    <img src={reference.image} alt='' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{reference.name}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p className='more'><strong>Link :</strong> <a href={reference.more} target="_blank" rel="noopener noreferrer">
   {reference.more}
</a></p>
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

export default References
