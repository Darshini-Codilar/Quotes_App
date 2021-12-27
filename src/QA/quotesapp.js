import { PureComponent } from "react";
import './quotesapp.css';

class Quotesapp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            status: false
        };
    }
    componentDidMount() {
        this.fetchQuotes();
    }
    fetchQuotes = () => {

        fetch('https://movie-quote-api.herokuapp.com/v1/quote/').then(resp => resp.json())
            .then(resp => this.setState({
                cards: resp,
                status: true
            }))
    }
    render() {
        console.log(this.state.status);
        return (
            <>
                <div className="app">
                    <div className="card">
                        <div className="heading">
                            <span>{this.state.status ? (<img  className="quotesymbol" src="images/symbolquotes.png" alt="image"/>) : (<></>)}
                            {this.state.cards.quote}</span>
                           <span> <button className="button" onClick=
                                {this.fetchQuotes}>
                                CLICK
                            </button></span>
                        </div>

                    </div>
                </div>
            </>
        );
    }




}

export default Quotesapp;