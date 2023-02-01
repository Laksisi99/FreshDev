import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backend = () => {

  const navigate = useNavigate();

  return (
    
    <main>
      <div className='pg-header'>
        <div className='container'>
          <h1>Back End Development</h1>
        </div>
      </div>
      <div className='container-content'>
            <h3>What is <i>Backend</i> Development ?</h3>
            <p>The term "backend" refers to something in the background. The backend is the type of 
              software used to design all the logic to incorporate all the functionalities of an application 
              when it comes to computer software and its applications.
            </p>
            <h3>What is the role of <i>Backend</i> Developer ?</h3>
            <p>Back-end developers make sure that the website functions properly by concentrating on
              databases, back-end logic, application programming interfaces (APIs), architecture, and servers. 
              They use code to assist browsers in communicating with databases, storing, understanding, 
              and deleting data.</p>
          
          
            <h3>What are the languages you should learn to do <i>Backend</i> Development?</h3>

            <div className='back-end-languages'>
             <div className='row'>
              <h6>✒️JavaScript</h6>
              <h6>✒️Java</h6>
              <h6>✒️Python</h6>
              <h6>✒️PHP</h6>
              <h6>✒️Ruby</h6>
              <h6>✒️C#</h6>
              <h6>✒️SQL</h6>
              <h6>✒️Perl</h6>
             </div>
            </div>

              <button  className='btn btn-primary btn-sm'
              onClick={() => navigate('/backendls')}
              >🖱️ Click To Know More About Backend Languages</button>
      </div>
    </main>
  )
}

export default Backend
