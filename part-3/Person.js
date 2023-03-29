const Person = (props) => {
    let message;
    let characters;
    if (props.age < 18) {
        message = "You must be 18."
    } else {
        message = "Please go vote."
    };
    if (props.name.length > 8) {
        characters = props.name.substring(0, 6)
    } else {
        characters = props.name;
    }
    return (
        <div>
            <p>{characters}</p>
            <p>Learn some more information about this person.</p>
            <h3>{message}</h3>
            <ul>
                {props.hobbies.map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};