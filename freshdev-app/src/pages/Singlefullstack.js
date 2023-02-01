import {useNavigate, useParams, useLocation} from 'react-router-dom';
import {FULLSTACKLS} from '../data';

const Singlefullstack = () => {

  const navigate = useNavigate();
  const {fullstacklId} = useParams();
  const {pathname} = useLocation();

  const Singlefullstack = FULLSTACKLS.find(fullstackl => fullstackl.id === parseInt(fullstacklId))

  const { name, languages, description, image, more} = Singlefullstack;

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              <p>{pathname}</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className='container-content'>
        <div className='row'>
          <div className='col-lg-5'>
            <img src={image} alt="" className='img-fluid' />
          </div>
          <div className='col-lg-7'>
            <h2>{name}</h2>
            <p className='languages'><strong>Include Languages :</strong> {languages}</p>
            <p>{description}</p>
            <p className='more'><strong>For More Details :</strong> <a href={more} target="_blank" rel="noopener noreferrer">
  Go to {more}
</a></p>
            

            <br />
            <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>BACK</button> &nbsp;
           
          </div>
        </div>
      </div>
    </main>
  )
}

export default Singlefullstack
