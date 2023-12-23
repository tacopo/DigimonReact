export function Digimon(props){
    return(
        <div className="card">
            <header className="cardTitle">
                <h2>{props.name}</h2>
            </header>
            <div className="cardImg">
                <img src={props.img}/>
            </div>
        </div>
    )
}