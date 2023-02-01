import React from 'react'
import { useNavigate } from 'react-router-dom'

const Frontend = () => {

  const navigate = useNavigate();

  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <h1>Front End Development</h1>
        </div>
      </div>
      <div className='container-content'>
            <h3>What is <i>Frontend</i> Development ?</h3>
            <p>Front end development is the creation of the application's front end. 
             It specifies how the application should appear to the user.
             A lot goes on behind the scenes to create a robust, interactive, and appealing user interface. 
             Frontend languages are important in app/web development.
            </p>
            <h3>What is the role of <i>Frontend</i> Developer ?</h3>
            <p>A frontend developer, in essence, is responsible for everything you see, including styling, 
              images, text, alignment, navigation, colors, and so on, and strives to make the 
              user experience as frictionless as possible.</p>
            <p>They also assist with debugging and add to the overall design and look.
              Frontend development's main aims are responsiveness and performance.</p>
          
            <h3>What are the languages you should learn to do <i>Frontend</i> Development?</h3>

            <div className='front-end-languages'>
             <div className='row'>
              <h6>✒️HTML</h6>
              <h6>✒️CSS</h6>
              <h6>✒️JavaScript</h6>
              <h6>✒️React</h6>
              <h6>✒️Angular</h6>
              <h6>✒️Vue</h6>
              <h6>✒️JQuery</h6>
              <h6>✒️Swift</h6>
             </div>
            </div>

              <button  className='btn btn-primary btn-sm'
              onClick={() => navigate('/frontendls')}
              >🖱️ Click To Know More About Frontend Languages</button>
      </div>
    </main>
  )
}

export default Frontend
