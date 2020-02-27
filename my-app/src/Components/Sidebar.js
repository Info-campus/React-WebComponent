import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return(
        <div class="sidebar-area">
            <h3 class="course-heading">Courses</h3>
            <ul>
                <li><a href="#">React</a></li>
                <li><a href="#">Angular</a></li>
                <li><a href="#">Javascript</a></li>
                <li><a href="#">HTML And CSS</a></li>
            </ul>
        </div>
    )
}

export default Sidebar