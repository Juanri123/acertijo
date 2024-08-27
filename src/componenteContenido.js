import React from 'react';
import './App.css';


function Contenido(props) {

    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.numeroMaximo) + 1);

    function obtenerNumero(evento) {
        setNumeroUsuario(parseInt(evento.target.value));
    }

    function comprobarNumeros() {
        console.log(numeroUsuario);
        if(numeroUsuario === numeroMaquina) {
            
            alert("Lo lograste!!");
        } else {
            alert("Lo lamento perdiste. El numero era: " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random() * props.numeroMaximo) + 1);
    }

    return(
        <div className='container'>
            <br></br>
            <label htmlFor="texto-numero" id='titulo-numero'>Adivina el numero del 1 al 10</label>
            <br></br>
            <br></br>
            <input 
                onChange={obtenerNumero} 
                id='texto-numero' 
                type="number" 
                placeholder='ingresa tu apuesta' 
                min={1} 
                max={10}>
            </input>
            <br></br>
            <br></br>
            <button className='btn-comprobar' onClick={comprobarNumeros}>Probar</button>
        </div>
    );
}

export default Contenido;