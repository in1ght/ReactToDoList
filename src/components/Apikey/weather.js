import React, { Component } from "react";



export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
    }

    componentDidMount() {
        var apikey = 'dc679c4958e56033bfd7eeccd743acda'
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&appid='+apikey+'')
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
        console.log(this.state);
        if (error) {
        return <div className={"App-header display_uncolumn " +this.props.theme}><p className={"todo_text_p"}>Error: {error.message}</p></div>;
        } else if (!isLoaded) {
        return <div className={"App-header display_uncolumn " +this.props.theme}><p className={"todo_text_p"}>Loading...</p></div>;
        } else {
            var weatherCelcium = data.main.temp - 273.15;
            var wetaher1 = Math.round(+weatherCelcium * 10) / 10;
            return (
                <div className={"App-header display_uncolumn " +this.props.theme}>
                    <img alt='' src={"http://openweathermap.org/img/w/"+ data.weather[0].icon +".png"} className="img_beauty"/>
                    <h1 className={"todo_text marginTop_0"}>Lviv : {wetaher1}°</h1>
                </div>
            );
        }
    }
}