
function Header () {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
function Body () {
    return(
        <main>
            <h1>This is my react project body component header</h1>
            <p>This is my paragraph</p>
        </main>
    )
}

function Footer() {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function App () {
    return (
        <div>
           <Header/>
           <Body/>
           <Footer/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(App())
