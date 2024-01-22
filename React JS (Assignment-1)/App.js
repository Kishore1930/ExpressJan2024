
import React from 'react';


function App() {



  //Students details (object)
  let studentsDetail = { sid: 10, sname: "Arun", course: "Biology", age: 17, total: "589" };

  //Doctors list (Array of Objects)
  let doctorArray = [
    { dID: 2343, dname: "Dr.Billa", designation: "Cardiologists", experience: "5 Years", contact: 9898989898 },
    { dID: 3423, dname: "Dr.Chandhan", designation: "Dentists", experience: "4 Years", contact: 8767542909 },
    { dID: 6748, dname: "Dr.Akil", designation: "Gynecologists", experience: "8 Years", contact: 6709834529 },
    { dID: 1243, dname: "Dr.Swetha", designation: "Veterinarians", experience: "2 Years", contact: 8760987231 },
    { dID: 5672, dname: "Dr.Rajan", designation: "Neurologists", experience: "12 Years", contact: 7878653901 },

  ];



  let result = doctorArray.map((item) => {
    return <tr>
      <td>   {item.dID}  </td>
      <td>   {item.dname}  </td>
      <td>   {item.designation}  </td>
      <td>   {item.experience}  </td>
      <td>   {item.contact}  </td>
    </tr>
  });






  //Output
  return (
    <>
      <h3 align="center">Assignment-1 (React)</h3>
      <hr />
      <div>
        <h3>Question 1:</h3>
        <h3>Students Detail</h3>

        <table border="2" width="400" cellspacing="0" cellpadding="5">

          <tr>
            <th>Student ID </th>
            <th>Student Name</th>
            <th>Student course</th>
            <th>Student age</th>
            <th>Student total</th>
          </tr>
          <tr>
            <td>{studentsDetail.sid}</td>
            <td>{studentsDetail.sname}</td>
            <td>{studentsDetail.course}</td>
            <td>{studentsDetail.age}</td>
            <td>{studentsDetail.total}</td>

          </tr>
        </table>

      </div>
      <br/>
      <br/>
      <hr />
      <br/>
      <br/>
      <div>
        <h3>Question 2:</h3>
        <h3>Doctor's List</h3>

        <table border="2" width="400" cellspacing="0" cellpadding="5">

          <th>   dID </th>
          <th>   dname  </th>
          <th>   designation  </th>
          <th>   experience  </th>
          <th>   contact  </th>

          {result}
        </table>

      </div>


    </>
  );
}

export default App;
