import { Link, NavLink } from 'react-router-dom';

const footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        
        <nav className='d-flex justify-content-center'>
        <NavLink to = '/'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Home    
                </NavLink>
                <NavLink to = 'advice'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Before Start    
                </NavLink>
                <NavLink to = 'frontend'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Front-end    
                </NavLink>
                <NavLink to = 'backend'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Back-end    
                </NavLink>
                <NavLink to = 'fullstack'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Full-stack    
                </NavLink>
                <NavLink to = 'other'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    Other    
                </NavLink>
                <NavLink to = 'references'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
                    References    
                </NavLink>
        </nav>
        <div className='copyrights'>
          &copy; 2023 <Link to="/">FreshDev</Link> - All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default footer
