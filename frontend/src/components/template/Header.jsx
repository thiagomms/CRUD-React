import './Header.css'
import React from 'react'



export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-4">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted"></p>

        <button class="btn">Dark Mode</button>

        
    </header>
    

   

    