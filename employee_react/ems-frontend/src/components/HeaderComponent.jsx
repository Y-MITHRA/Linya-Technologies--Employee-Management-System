import React from 'react'
import './HeaderFooter.css'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="custom-navbar">
                    <a className="navbar-brand" href="https://www.ems.in">
                        Employee Management System
                    </a>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
