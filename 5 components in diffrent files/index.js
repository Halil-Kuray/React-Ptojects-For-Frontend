import Header from './Header'

function Page() {
    return (
        <main>
            <Header/>
            <MainContent/>
            <Footer/>
        </main>
    )
}

//ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)