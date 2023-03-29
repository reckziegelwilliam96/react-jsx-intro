const App = () => {
    return(
        <div>
            <FirstComponent />
            <NamedComponent name="Liam"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))