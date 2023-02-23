import React, {useState} from "react";

export default function Form() {
    const [formData, setFormData] = useState(
        { 
            firstName: "", 
            lastName: "", 
            email: "", 
            comment: "",
            isFriendly:false,
            employment: "",
            favColor: ""
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
    }

    function handleSubmit(event) {
        event.preventDefault();
        //sumbitToApi(formData)
        console.log(formData)

    }

    return(
        <form onSubmit={handleSubmit}>

                
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

                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
        </form>
    )
}