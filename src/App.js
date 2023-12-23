import logo from './logo.svg';
import {useState, useEffect} from "react";
import {Digimon} from "./Componentes/Digimon";

function App() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://digimon-api.vercel.app/api/digimon").then((response) => response.json()).then((data) => setData(data))
    }, []);
    return (
        <div className="galeria">
            {data?.map(function (digimon) {
                return <Digimon name={digimon.name} img={digimon.img} key={digimon.name}/>
            })}

        </div>
    )


}

export default App;
