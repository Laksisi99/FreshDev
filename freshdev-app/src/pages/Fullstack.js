import React from 'react'
import { useNavigate } from 'react-router-dom'

const Fullstack = () => {

  const navigate = useNavigate();

  return (
    
    <main>
      <div className='pg-header'>
        <div className='container'>
          <h1>Full Stack Development</h1>
        </div>
      </div>
      <div className='container-content'>
            <h3>What is <i>Fullstack</i> Development ?</h3>
            <p>Full stack development refers to the development of an application from start to finish, 
              including the front end and back end. The user interface is the front end, 
              and the back end handles the business logic and application workflows.
            </p>
            <h3>What is the role of <i>Fullstack</i> Developer ?</h3>
            <p>A web developer or engineer who works on both the front and back ends of a website or application
              is known as a full stack developer. In this sense, they provide an end-to-end service and can
              work on projects involving databases and the development of user-facing websites.
            </p>
          
          
            <h3>What are the stacks you can learn to do <i>Fullstack</i> Development?</h3>

            <div className='full-stack-languages'>
             <div className='row'>
              <h6>✒️MERN Stack</h6>
              <h6>✒️MEAN Stack</h6>
              <h6>✒️MEVN Stack</h6>
              <h6>✒️LAMP Stack</h6>
             </div>
            </div>

              <button  className='btn btn-primary btn-sm'
              onClick={() => navigate('/fullstackls')}
              >🖱️ Click To Know More About Stacks</button>
      </div>
    </main>
  )
}

export default Fullstack
