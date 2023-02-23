import React, {useState} from "react";

export default function Form() {
    const [formData, setFormData] = useState({ firstName:"", lastName:""});

    function handleChange(event) {

        setFormData(prevFormData => {

            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        console.log(formData)
    }


    return(
        <form action="https://my-adress.com" method="POST" >
            
            <label htmlFor="">
                First Name
                <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Last Name
                <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                />
            </label>
            
        </form>
    )
}