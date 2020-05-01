import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <LoginControl />
      <LightControl />
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (<p><h1>{isLoggedIn ? 'Welcome Back!' : 'Please Sign Up!'}</h1></p>);
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  /* onClick verirken farklı şekillerde de verilebilir */
  /* 1- normal fonksiyonu onClick'e yazarken this i kullanmak için ok fonksiyondan yararlanırız onClick 
      onClick={() => this.handleLoginClick()}*/
  /* 2- ok fonksiyonu onClick'e yazarken direk olarak çağırmamız yeterli olacaktır  
      onClick={this.handleLogoutClick} */
  /* 3- fonksiyonu component e bind edersek de direk olarak ismi ile onClick'e yazabiliriz.  
      this.handleLightButtonClick = this.handleLightButtonClick.bind(this); 
      onClick={this.handleLogoutClick}
      */

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <LoginButtonControl onLoginClick={this.handleLoginClick} onLogoutClick={this.handleLogoutClick} isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

function LoginButtonControl(props) {
  const onLoginClick = props.onLoginClick;
  const onLogoutClick = props.onLogoutClick;
  const isLoggedIn = props.isLoggedIn;

  return (<button onClick={isLoggedIn ? onLogoutClick : onLoginClick} className={isLoggedIn ? 'logout' : 'login'}>
    {isLoggedIn ? 'Logout' : 'Sign Up'}
  </button>);
}

class LightControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLightOn: true }

    this.handleLightButtonClick = this.handleLightButtonClick.bind(this);
  }

  handleLightButtonClick() {
    this.setState(state => ({
      isLightOn: !state.isLightOn
    }));
  }

  render() {
    return (<LightButton onClick={this.handleLightButtonClick} isLightOn={this.state.isLightOn} />);
  };
}


function LightButton(props) {
  return (<button onClick={props.onClick} style={{ backgroundColor: props.isLightOn ? 'gray' : 'balck' }}>
    {props.isLightOn ? 'Turn Off the Light' : 'Turn On the Light'}
  </button>);
}

export default App;
