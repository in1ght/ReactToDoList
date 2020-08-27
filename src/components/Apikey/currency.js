import React, { Component } from "react";



export default class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
    }

    componentDidMount() {
        fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then(results => {
            return results.json();
        })

        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                data: result
            });
            },
            // Примітка: важливо обробляти помилки саме тут,
            // а не в блоці catch (), щоб не перехоплювати
            // виключення з помилок в самих компонентах.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )

    }


    render() {
        const { error, isLoaded, data } = this.state;
        console.log(data[1]);
        if (error) {
        return <div className={"App-header display_uncolumn " +this.props.theme}><p className={"todo_text_p"}>Error: {error.message}</p></div>;
        } else if (!isLoaded) {
        return <div className={"App-header display_uncolumn " +this.props.theme}><p className={"todo_text_p"}>Loading...</p></div>;
        } else {
            var buy = Math.round(+data[1].buy * 10) / 10;
            var sale = Math.round(+data[1].sale * 10) / 10;
            return (
                <div className={"App-header display_uncolumn " +this.props.theme}>
                    <p className={"todo_text_p"}> Currency {data[1].ccy} to {data[1].base_ccy}</p>
                    <h1 className={"todo_text marginTop_0"}>{buy} : {sale}</h1>
                </div>
            );
        }
    }
}