
import React, { useState } from "react";

function EmpList() {
    const [empArray, setEmpArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);

    function getEmpButton_click() {
        let tempArray = [
            { empno: 2312, ename: "Arun", job: "Accounts", sal: 27000, deptno: 12 },
            { empno: 3222, ename: "Charan", job: "Billing", sal: 16000, deptno: 12 },
            { empno: 1076, ename: "Ram", job: "Manager", sal: 45000, deptno: 12 },
        ];

        setEmpArray(tempArray);
    }

    function addEmpButton_click() {
        let tempArray = [...empArray];

        if (isUpdate && updateIndex !== null) {
            // Update existing record
            tempArray[updateIndex] = { empno, ename, job,sal,deptno };
            setIsUpdate(false);
            setUpdateIndex(null);
        } else {
            // Add new record
            let empObj = {  empno, ename, job,sal,deptno};
            tempArray.push(empObj);
        }

        setEmpArray(tempArray);
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function deleteEmp_click(empno) {
        let tempArray = empArray.filter((item) => item.empno !== empno);
        setEmpArray(tempArray);
    }

    function updateEmp_click(empno, index) {

        const empToUpdate = empArray.find((item) => item.empno === empno);

        setEmpno(empToUpdate.empno);

        setEname(empToUpdate.ename);

        setJob(empToUpdate.job);

        setSal(empToUpdate.sal);

        setDeptno(empToUpdate.deptno);

        setIsUpdate(true);

        setUpdateIndex(index);
    }

    let resultArray2 = empArray.map((item, index) => (
        <tr key={index}>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td>
                <button
                    onClick={() => deleteEmp_click(item.empno)}
                >
                    Delete
                </button>
            </td>
            <td> <button
                onClick={() => updateEmp_click(item.empno, index)}
            >
                Update
            </button></td>
        </tr>
    ));

    return (
        <>
            <h3 align="center">Assignment-2 Q-3 Employee Details</h3>
            <hr />

            <input
                type="text"
                placeholder="Emp Number"
                value={empno}
                onChange={(e) => setEmpno(e.target.value)}
            />
            <input
                type="text"
                placeholder="Emp Name"
                value={ename}
                onChange={(e) => setEname(e.target.value)}
            />
            <input
                type="text"
                placeholder="Job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <input
                type="text"
                placeholder="Salary"
                value={sal}
                onChange={(e) => setSal(e.target.value)}
            />
            <input
                type="text"
                placeholder="Dept No"
                value={deptno}
                onChange={(e) => setDeptno(e.target.value)}
            />
            <hr />
            <input type="button" onClick={getEmpButton_click} value="Get Emp" />
            <input
                type="button"
                onClick={addEmpButton_click}
                value={isUpdate ? "Update Emp" : "Add Emp"}
            />
            <hr />

            <table border="2" width="400" cellSpacing="0" cellPadding="5">
                <thead>
                    <tr>
                        <th>Emp Number</th>
                        <th>Emp Name</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Dep Number</th>
                        <th>Delete Employee</th>
                        <th>Update Employee</th>
                    </tr>
                </thead>
                <tbody>{resultArray2}</tbody>
            </table>
        </>
    );
}

export default EmpList;