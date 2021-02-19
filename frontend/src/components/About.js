import React from 'react';
import './About.css';

function About() {
    return (
        <div className="main-text" >

            <ul className="text-lineup">
                <li>
                <h2>
                    Project management system for schools.
                </h2>
                </li>

                <li>
                From a technical standpoint this is a CRUD (create, read, update and delete) application.
                </li>

               <li>
                It allows to create and delete projects. Every project has a number of groups and groups have a number of students in them.
                </li> 

               <li>
                Students can be manipulated by being removed, added and assigned to certain groups. 
                </li>

            </ul>

        </div>
    )
}

export default About;
