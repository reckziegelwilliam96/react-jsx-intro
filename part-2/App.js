const App = () => {
    return (
        <div>
            <Tweet username="User1" name="Test1" date="2023-03-29" message="Test Message 1"/>
            <Tweet username="User2" name="Test2" date="2023-03-29" message="Test Message 2"/>
            <Tweet username="User3" name="Test3" date="2023-03-29" message="Test Message 3"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));