import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';

//That's circular black button that shows the count of users/victims
class Circle extends React.Component {

    state = {
        response: ''
    };

    //That happens on page load I guess? 
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.count }))
            .catch(err => console.log(err));
        }
        //To show the victim count we need to make a request to the backend
        //where the current count is being calculated
        callApi = async () => {
        const response = await fetch('/api/others');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
  
  //show victim count within a fancy circle 
  render () {
    return (
      <div className="circle">
        <div>(at least)</div>
        <middle className="count">{this.state.response}</middle>
        <div>OTHERS ARE IN A SIMILAR SITUATION</div>  
      </div>
    );
  }
}
//That's the line in the middle that has a bunch of buttons on it
class MiddleBar extends React.Component {
  renderSquare () {
    return <Circle />;
  }

  render () {
    return (
      <div>
        <h1>me & all the others</h1>
        <h2>YOU ARE NOT ALONE</h2>
        <div className="middle-bar">
          {this.renderSquare()}
        </div>
        <div className="column">
        </div>
        <div className="login">
          <Link to="/login"><button className="login-button">LOG IN</button></Link>
          <Link to="/joinus"><button className="login-button">JOIN US</button></Link>
          </div>
        <div className="column">
        </div>
        <div className="column">
        </div>
      </div>
    );
  }
}

class Login extends React.Component {
  render (){
    return (
      <div>This is where people login
      </div>
    );
  }
}
class Join extends React.Component {
  render (){
    return (
      <div>This is where people join us
      </div>
    );
  }
}

 ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={MiddleBar} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/joinus" component={Join} />
      </div>
  </Router>,
  document.getElementById('root')
);

