import {NavLink} from 'react-router-dom';

import React from 'react'

const header = () => {
  return (
    <header>
        <div className='head-bar'>
            <div className='d flex justify-content-between align-items-center'>
                <div className='logo'>FreshDev</div>
            </div>

            <nav className='nav nav-pills nav-fill'>
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
                    Before Start    
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

        </div>
    </header>
  )
}

export default header

