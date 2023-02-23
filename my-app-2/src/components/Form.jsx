import React, {useState} from "react";

export default function Form() {
    const [formData, setFormData] = useState(
        { 
            firstName:"", 
            lastName:"", 
            email:"", 
            comment:"",
            isFriendly:true,
            employment:""
        });

    function handleChange(event) {

        const {name, value, type, checked} = event.target
        //Object destructuring. INSTEAD OF event.target.name, event.target. value, event.target.type ...

        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox"? checked: value
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
                <label htmlFor="isFriendly">Are you friendly?</label>
                <input 
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}// instead of value this time we need to use checked
                    onClick={handleChange}
                    name="isFriendly"
                />


                <fieldset>
                    <legend>Current Employment Status</legend>
                    <label htmlFor="unemplyed">Unemployed</label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="unemplyed"
                        value="unemployed"
                        onClick={handleChange}
                        checked={formData.employment === "unemployed"}
                    />
                    <br />
                    <label htmlFor="part-time">Part Time</label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="part-time"
                        value="part-time"
                        onClick={handleChange}
                        checked={formData.employment === "part-time"}
                    /> <br />
                    <label htmlFor="full-time">Full Time</label>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="full-time"
                        value="full-time"
                        onClick={handleChange}
                        checked={formData.employment === "full-time"}

                    />
                </fieldset>
            
            
        </form>
    )
}