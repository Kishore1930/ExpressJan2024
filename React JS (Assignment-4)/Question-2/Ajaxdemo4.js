import axios from 'axios';
import { useState } from 'react';

function AjaxDemo4() {   

   const [deptsArray, setDeptsArray] = useState([]);
   const [deptno, setDeptno] = useState("");
   const [dname, setDname] = useState("");
   const [loc, setLoc] = useState("");



  function getDataButton_click() {

      let url = "http://localhost:3005/api/depts";
      axios.get(url).then( (resData) => 
      {       
        setDeptsArray(resData.data);
      });
  }

  function addDeptButton_click() {
    
    let deptObj = {};
    deptObj.Deptno = deptno;
    deptObj.Dname = dname;
    deptObj.Loc = loc;
      

    let url = "http://localhost:3005/api/depts";
    axios.post(url, deptObj).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });
    
  
   
    clearFields();
}
function updateDeptButton_click() {
    
  let deptObj = {};
  deptObj.Deptno = deptno;
  deptObj.Dname = dname;
  deptObj.Loc = loc;
    

  let url = "http://localhost:3005/api/depts";
  axios.put(url, deptObj).then( (resData) => 
  {       
    alert(resData.data.status);
    getDataButton_click();
  });
  
clearFields();
}

function clearFields()
{
    setDeptno("");
    setDname("");
    setLoc(""); 
}

function deleteDept_click(dno) {

  let flag = window.confirm("Are you sure want to delete?");    
  if(  flag == false   )
  {
      return;
  }

  let url = "http://localhost:3005/api/depts/" + dno;
  axios.delete(url).then( (resData) => 
  {       
    alert(resData.data.status);
    getDataButton_click();
  });
}


  let resultArray = deptsArray.map(item => 
    {
      return <tr>
          <td>{item.Deptno}</td>
          <td>{item.Dname}</td>
          <td>{item.Loc}</td>
          <td>
          <a href="javascript:void(0);" 
                   onClick={() => deleteDept_click(item.Deptno)}>
                    <img  src="images/Delete-Button.png"  width="20"  />
                </a> 
          </td>
      </tr>;
    });


  return (
    <div style={ {"border":"2px solid black","height":"100vh", "padding":"10px", "padding-bottom":"15px", "backgroundColor" : "gray"}}>

      <h3>MERN Stack Implementation</h3>
      <br/>
<br/>
      <input type="text" placeholder="Dept Number" value={deptno} onChange={ (e) => setDeptno(e.target.value)} />
            <input type="text" placeholder="Dept Name" value={dname} onChange={ (e) => setDname(e.target.value)} />
            <input type="text" placeholder="Dept Location" value={loc} onChange={ (e) => setLoc(e.target.value)} />
      <br/>
<br/>
      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />
                           <input type="button" onClick={addDeptButton_click} value="Add Dept" />
                           <input type="button" onClick={updateDeptButton_click} value="Update Dept" />

      <br/>
<br/>
      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Dept Location</th>
            <th></th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemo4;