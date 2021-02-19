import {React, useEffect, useState} from 'react';
import axios from 'axios';

function TablesTable({groups, sGroup, Pid}) {

    const[number, setNumber] =useState([]);
    const[stud, setStud] =useState([]);
    const[diff, setDiff] =useState(0);
    
    const[projectID, setPid]= useState("");
    setPid(Pid);
    const[fullname, setFullname]= useState("");
    const[group_number, setGnumber]= useState("");


    const createStudent= (e) => {
        e.preventDefault();
        const info= {fullname,group_number, projectID};
        console.log(info)
    
        fetch('http://restfulapi.test/api/projects' ,{
          method: 'POST',
          headers :{"Content-Type": "application/json"},
          body: JSON.stringify(info)
      }).then(() =>{
        console.log('success')
        fetchStudents();
      })
    
     }

      
    for(var i=0; i<groups; i++){
      setNumber(...number, i);
  }

  for(var i=0; i<sGroup; i++){
    setStud(...stud, i);
}

    const [students, setStudents] = useState([]);
    

    const fetchStudents = async () => {
        const data1=await axios.get('http://restfulapi.test/api/students');
        setStudents(data1);
    }


    const deleteStudent = async (id) => {
        const data=await axios.delete(`http://restfulapi.test/api/students/${id}`);
       await fetchStudents();
    }

    useEffect (()=>{
        fetchStudents();        
      }, []);

      

    return (
        <div>
             <div className="text">
                <form onSubmit={createStudent} class="login-form" >
                <h1>Create a project</h1>
                
                <input type="number" name="Project_Groups" value={fullname} onChange={e =>setFullname(e.target.value)} id="fullname" placeholder=" fullname " autocomplete="off"  className="form_text" required />
                <input type="number" name="Project_Students" value={group_number} onChange={e =>setGnumber(e.target.value)} id="group_number" placeholder="group_number" autocomplete="off"  className="form_text" required />
                    
                
                <button type="submit" className="form_button" >Create</button>
                </form>
             </div>



            <table className="styled-table">
                <thead>
                    <tr>    
                        <th>Student</th>
                        <th>Group</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className="tbody">
                  
                {students.map((student) => {
                    if(student.projectID===Pid){
                        
                   
                    
                    <tr key={student.id}>
                    <td>{student.fullname}</td>
                    <td>{student.group_number}</td>
                    <td><button onClick={(()=>deleteStudent(student.id))} >Remove</button></td>
                 </tr>
                    
                    }  
                })}
                               
                </tbody>
            </table>


            {number.map((num) => {
            <table className="styled-table">
                <thead>
                    <tr>
                        
                        <th>{`Group #${num}`}</th>
                        
                    </tr>
                </thead>
                {stud.map((std) => {
                <tbody className="tbody">

                {students.map((student) => {    
                  if(student.projectID===Pid&& student.group_number===num){
                      setDiff(diff+1);
                         <tr >
                           <td>
                            {student.fullname}
                           </td>
                         </tr>
                   }

                    })} 

                    {/* if(diff<map){  */}
                    <tr >
                    <td>
                        Assign student
                    </td>
                  </tr>
               {/*  }  */}
                 {/*  setDiff(diff+1);  */}  
                </tbody>
                

                })}
            </table>
                
                setDiff(0);
          })}
        

        </div>


    )
}

export default TablesTable
