import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {

    console.log('1st');
    super(props);

    this.state = {
      monsters: [],
    };
  }


  componentDidMount(){

    console.log('3rd');


    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(response =>(

            this.setState(()=>{
              return {monsters: response}

            }, ()=>{

           console.log('Response : ', response);
            })
    ));
  }
  render() {

    console.log('2nd');

    return (
      <div className="App">
        {this.state.monsters.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
              </div>
            );

        })  }

      </div>
    );
  }
}

export default App;
