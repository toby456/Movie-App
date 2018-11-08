import React, { Component } from 'react';



class Button extends Component {

  render() {
    return (
      <div className="Button">
      <button style = {{background: 'purple', height: '20px', width: '120px', color: 'white'}}>Find Movie</button>
      </div>
    );
  }
}

export default Button;
