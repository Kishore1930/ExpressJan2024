
import axios from 'axios';
import { useState } from 'react';
import './index.css'
import './card.css';

function AjaxDemo1() {

    const [usersArray, setUsersArray] = useState([]);

    function getDataButton_click() {

        let url = "https://cors-anywhere.herokuapp.com/https://dummy.restapiexample.com/api/v1/employees";
        axios.get(url).then((resData) => {
            console.log(resData.data);
            setUsersArray(resData.data.data);
        });
    }

    let resultArray = usersArray.map(item => {
        return (

            <div className='card-container'>
                <div className='card'>
                    <p><img src={item.profile_image} alt="" /></p>

                    <div className="card-content">
                        <h2>{item.employee_name}</h2>
                        <p>{item.employee_salary}</p>
                        <p>{item.employee_age}</p>
                        <p>{item.id}</p>

                    </div>

                </div>
            </div>


            
        )
    });


    return (
        <div style={{ "padding": "5px" }}>

            <h3>User Details by using Axios</h3>
            <hr />


            <input type="button" onClick={getDataButton_click}
                value="Get Data" />

            <hr />


            {resultArray}


        </div>
    );
}

export default AjaxDemo1;
