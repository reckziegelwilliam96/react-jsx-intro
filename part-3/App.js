const App = () => {
    return (
        <div>
            <Person age={17} name="Dwayne-Johnson" hobbies={["Fishing", "Chess"]}/>
            <Person age={21} name="Jeremiah" hobbies={["Acting", "Backgammon"]}/>
            <Person age={22} name="Jean-Louis" hobbies={["Fencing", "Tennis"]}/>
            <Alert type="success" message="This is a success alert!" />
            <Alert type="warning" message="This is a warning alert!" />
            <Alert type="danger" message="This is a danger alert!" />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));