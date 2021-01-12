import React, { Component } from 'react';
import '../componentes/conversorDinamicoStyle.css'
import logo from '../logo.svg';

export default class ConversorDinamico extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA: "",
            moedaB: "",
            valor: "",
            valor_convertido: ""
        }

        this.converter = this.converter.bind(this)
    }

    converter() {

        if(this.state.valor === "" || this.state.moedaA === "" || this.state.moedaB === "") {
            return 0
        }

        let de_para = `${this.state.moedaA}_${this.state.moedaB}`
        const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=005133abc66317cb4bed`;

        fetch(url).then(res => {
            return res.json()
        })
            .then(json => {

                let cotacao = json[de_para]
                let valor_convertido = (this.state.valor * cotacao).toFixed(3)
                this.setState({ valor_convertido })
            })
    }

    render() {
        return (
            <div className="conversorAll">
                <div className="container">
                    <span>Conversor de moedas</span> <br></br> <br></br>
                    <input className="exchange" type="text" onChange={(e) => { this.setState({ valor: e.target.value }) }}></input>
                    <div className="selects">
                        <p>
                            <select onChange={(e) => { this.setState({ moedaA: e.target.value }) }}>
                                <option>Moeda</option>
                                <option value="ANG">ANG</option>
                                <option value="USD">USD</option>
                                <option value="BRL">BRL</option>
                            </select>
                        </p>
                        &nbsp; &nbsp; &nbsp;
                        <p>
                            <select onChange={(e) => { this.setState({ moedaB: e.target.value }) }}>
                                <option>Moeda</option>
                                <option value="ANG">ANG</option>
                                <option value="USD">USD</option>
                                <option value="BRL">BRL</option>
                            </select>
                        </p>
                    </div>
                    <input type="button" onClick={this.converter} value="Converter"></input> &nbsp;
                    <span>{this.state.valor_convertido}</span>
                </div>
            </div>
        )
    }
}