import React,{ useEffect, useState} from 'react';
import './Tables.css'
import axios from 'axios';
import TablesTable from './TablesTable';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';


function Tables() {

    const [projects, setProjects] = useState([]);
    const[name, setName]= useState("");
    const[groups, setGroups]= useState("");
    const[students_group, setStudents]= useState("");
   
    const fetchProjects = async () => {
        const data=await axios.get('http://restfulapi.test/api/projects');
        setProjects(data);
    }
  
  const deleteProjects = async (id) => {
    const data=await axios.delete(`http://restfulapi.test/api/projects/${id}`);
   await fetchProjects();
}

  const createProject= (e) => {
    e.preventDefault();
    const info= {name,groups, students_group};
    console.log(info)

    fetch('http://restfulapi.test/api/projects' ,{
      method: 'POST',
      headers :{"Content-Type": "application/json"},
      body: JSON.stringify(info)
  }).then(() =>{
    console.log('success')
    fetchProjects();
  })

 }


  useEffect (()=>{
    fetchProjects();        
  }, []);
  
    return (
        <div className="main-body">
             
             <div className="text">
                <form onSubmit={createProject} class="login-form" >
                <h1>Create a project</h1>
                
                <input type="text" name="Project_name" value={name} onChange={e =>setName(e.target.value)}  id="Project_name" placeholder=" Project name" autocomplete="off"  className="form_text" required />
                <input type="number" name="Project_Groups" value={groups} onChange={e =>setGroups(e.target.value)} id="Project_Groups" placeholder=" Groups in the project " autocomplete="off"  className="form_text" required />
                <input type="number" name="Project_Students" value={students_group} onChange={e =>setStudents(e.target.value)} id="Project_Students" placeholder="Students in the group" autocomplete="off"  className="form_text" required />
                    
                
                <button type="submit" className="form_button" >Create</button>
                </form>
             </div>
             

             <div className="main">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Project name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <Router>
                {projects.map((project) => {   
                         <tr key={project.id}>
                            <td><Link to="/projects/:id"> {project.name}</Link></td>
                            <Route exact path={`/projects/${project.id}`} > <TablesTable groups={project.groups} project={project} sGroup={project.student_group} Pid={project.id}/> </Route>
                            <td><button onClick={(()=>deleteProjects(project.id))} >Remove</button></td>
                         </tr>
                          })}
                        </Router>
                </tbody>
            </table>
            </div>
        </div>
    )
}


export default Tables;
