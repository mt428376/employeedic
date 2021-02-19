import React,{useState,useEffect} from "react";
import axios from "axios";

const EmployeeDirectory = () => {
const [employees,setEmployees] =useState([]);

  

  useEffect (() => {
    axios.get("https://randomuser.me/api/?results=10").then(response => {
        console.log(response.data);
        setEmployees(response.data.results);
        
    }).catch(err => {
        console.log(err);
    }
        )
     
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Employee Directory</h1>
        </div>
      </div>
      <div className="row">
      <div className="col">
      <table className="table table-striped">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
      {employees.map((employee,index) => (
       <tr key={employee?.id?.value ||index}>
      
    
      <th>
          <img 
          src={employee?.picture?.thumbnail}
       alt="employee"></img></th>
      <td>{employee?.id?.value || index}</td>
      <td>{employee?.name?.first}{employee?.name?.last}</td>
     
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee?.dob?.date}</td>
    </tr>
    ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
      
      
      
    
    

   
  );
    
};

export default EmployeeDirectory;
