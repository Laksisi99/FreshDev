import {useNavigate, useParams, useLocation} from 'react-router-dom';
import {BACKENDLS} from '../data';

const Singlebackend = () => {

  const navigate = useNavigate();
  const {backendlId} = useParams();
  const {pathname} = useLocation();

  const Singlebackend = BACKENDLS.find(backendl => backendl.id === parseInt(backendlId))

  const { name, developed_by, latest_release, description, image,frameworks, more} = Singlebackend;

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
            <p className='developer'><strong>Developed By :</strong> {developed_by}</p>
            <p className='latest'><strong>Latest Release :</strong> {latest_release}</p>
            <p className='framework'><strong>frameworks :</strong> {frameworks}</p>
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

export default Singlebackend
