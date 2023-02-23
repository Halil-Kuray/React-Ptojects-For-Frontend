import React, {useState} from "react";

export default function Form() {
    const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", comment:""});

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

                
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                />

                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                />
            
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <textarea 
                    name="comment" 
                    placeholder="Your Comment" 
                    onChange={handleChange} 
                    value={formData.comment} cols="30" rows="10"
                />
            
            
        </form>
    )
}