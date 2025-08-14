 function UserCard({ id ,name, email, avatar , onDelete  }) {
    return (
        <div className="card">
            <div className="card-item">
            <img src={avatar} alt={name}  /> 
            <h3>{name}</h3>
            <p>{email}</p>


            <button onClick={() => onDelete (id)}> Dlelete</button>
        </div>
        </div>
    );
}

export default UserCard;
