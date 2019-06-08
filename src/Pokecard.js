import React, {Component} from 'react';
import './Pokecard.css';
// const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKEMON_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function fancyNum(n) {
    const strNum = n.toString();
    const doubleZero = "00";
    const singleZero = "0";
    
    if(n > 0 && n < 10) {
        return doubleZero + strNum;
    } else if (n > 0 && n < 100) {
        return singleZero + strNum;
    } else {
        return strNum;
    } 
}

class Pokecard extends Component {
    
    render() {
        
        const {id, name, type, exp} = this.props;
        const imgSrc = `${POKEMON_API}${fancyNum(id)}.png`;
        
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                <img src={imgSrc} alt={name}/>
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">Exp: {exp}</div>
            </div>
        );

    }
}

export default Pokecard;