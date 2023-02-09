/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src="./React-icon.svg.png" className="logo" />
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent (){
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer> 
    )
}

function Page() {
    return (
        <main>
            <Header/>
            <MainContent/>
            <Footer/>
        </main>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))