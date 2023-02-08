function MenuComponent () {
    return(
        <main>
            <h1> This is my header</h1>
            <p>This is my paragraph</p>
            <div>This is my div</div>
        </main>
    )
}

function MyNavbar () {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    )
}


ReactDOM.render(
    <main> 
        <MyNavbar/>
        <MenuComponent/>
    </main>,
    document.getElementById('root'))