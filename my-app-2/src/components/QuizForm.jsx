import React, {useState} from "react";

export default function Form () {
    const [data, setData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        news:false
    })

    function handleSubmit(e) {
        e.preventDefault()

        if(data.password === data.confirmPassword){
            console.log(`You have successfully logged in! ${data}`)
        }else{
            console.log("Your passwords do not match!!")
        }
        console.log(data)
    }

    function handleChange(event) {

        const { name, value, type, checked} = event.target

        setData( prevData => {
            return{
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>

            <input
                type="email" 
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={data.email}
            />

            <input
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
            />

            <input 
                type="password" 
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
            />
            
            <div>
                <input
                    id="okayToEmail"
                    type="checkbox"
                    checked={data.news}
                    onClick={handleChange}
                    name="news"
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button>
                Sign up
            </button>
        </form>
    </div>
    )
}