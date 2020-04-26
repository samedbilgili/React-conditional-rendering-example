import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <LoginControl />
      <LightControl />
    </React.StrictMode>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function UserGreeting() {
  return (<p><h1>&nbsp;Welcome back!</h1></p>);
}

function GuestGreeting() {
  return (<p><h1>&nbsp;Please Sign Up!</h1></p>);
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

class LightControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLightOn: true }

    this.handleLightButtonClick = this.handleLightButtonClick.bind(this);
  }

  handleLightButtonClick() {
    console.log('geldii');
    this.setState(state => ({
      isLightOn: !state.isLightOn
    }));
  }

  render() {
    return (<LightButton onClick={this.handleLightButtonClick} isLightOn={this.state.isLightOn} />);
  };
}

function LoginButton(props) {
  return (<button onClick={props.onClick} style={{ width: "250px", height: "50px", backgroundColor: "green", color: "white" }}>Login</button>);
}

function LogoutButton(props) {
  return (<button onClick={props.onClick} style={{ width: "250px", height: "50px", backgroundColor: "red", color: "white" }}>Logout</button>);
}


function LightButton(props) {
  if (props.isLightOn) {
    return (<button onClick={props.onClick} style={{ backgroundColor: "lightblue", width: "250px", height: "50px" }}>Işığı Kapat</button>);
  } else {
    return (<button onClick={props.onClick} style={{ backgroundColor: "black", color: "white", width: "250px", height: "50px" }}>Işığı Aç</button>);
  }
}

export default App;
