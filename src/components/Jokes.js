import React, { Component } from 'react';

class Jokes extends Component {

    state = {"jokes":[]};
   

    render() {
        return (
            <div>
                This is really my joke <br></br>
    
                <button onClick={this.getTenJokes.bind(this)}>Get 10 Jokes</button>
                <br></br>
                <br></br>
                {
                this.state.jokes.map((joke)=>{
                return (<div key={joke.id}>
                    <h1>{joke.setup}</h1>
                    <p>{joke.punchline}</p>
                </div>)
                })}
            </div>
        )
    }
    componentDidMount() {
        // fetch("https://official-joke-api.appspot.com/random_joke")
        //     .then(response => response.json())
        //     .then(json => this.setState({ "joke": json }))
    }

    getTenJokes() {    
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then(response => response.json())
                .then(json => {
                    this.setState({"jokes":json})
                })
    }
}

export default Jokes;