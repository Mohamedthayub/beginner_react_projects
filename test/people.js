const People = ({Name,Age,Role}) => {
    return (
        <div className="card">
            <h1>{Name}</h1>
            <h2>{Age}</h2>
            <h3>{Role}</h3>
        </div>
    )
}
export  default People;