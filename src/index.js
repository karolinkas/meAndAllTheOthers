import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Circle extends React.Component {

    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.count }))
            .catch(err => console.log(err));
        }

        callApi = async () => {
        const response = await fetch('/api/others');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

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

class MiddleBar extends React.Component {
  renderSquare () {
    return <Circle />;
  }

  render () {
    return (
      <div>
        <div className="middle-bar">
          {this.renderSquare()}
        </div>
        <div className="column">
        </div>
        <div className="column">
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MiddleBar />,
  document.getElementById('root')
);
