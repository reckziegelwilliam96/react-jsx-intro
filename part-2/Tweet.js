const Tweet = (props) => {
    return (
        <div>
            <p><b>Written by:</b> {props.username}</p>
            <p>{props.name}</p>
            <p><i>{props.date}</i></p>
            <p><b>Message:</b> {props.message}</p>
        </div>
    );
};