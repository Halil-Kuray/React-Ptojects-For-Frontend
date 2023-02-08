const Navbar = (
    <nav>
        <img src="./React-icon.svg.png" width="50px"/>
        <h1>This is a jsx sample</h1>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Menu</li>
        </ul>
    </nav>
)

const Body = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100 stars on github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>  
    </div>

)

const App =(
     <main>
        {Navbar}
        {Body}
    </main>
    )





// ReactDOM.render(
//     Navbar,
//     document.getElementById('root')
//     )

// React version 18 
ReactDOM.createRoot(document.getElementById('root')).render(App)