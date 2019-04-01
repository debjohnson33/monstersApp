import React, { Component } from 'react';
import Auth from '../modules/Auth';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            myMonsters: null,
            monstersLoaded: false
        }
    }

    componentDidMount() {
        fetch('/profile', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization' : `Token ${Auth.getToken()}`
            }
        }).then(res => res.json())
          .then(res => {
              this.setState({
                  myMonsters: res.monsters,
                  monstersLoaded: true
              })
          }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="dash">
                {(this.state.monstersLoaded)
                  ? this.state.myMonsters.map (monster => {
                      return <h1 key={monster.id}>{monster.name}</h1>
                  })
                  : <p>Loading...</p> }
            </div>
            
        )
    }
}

export default Dashboard;