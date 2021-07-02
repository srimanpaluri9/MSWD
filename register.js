import React, { Component } from "react";
 
class register extends Component {
  render() {
    return  (
      <form>
  
      <label>

        <p>Username</p>

        <input type="text" />

      </label>

      <label>

        <p>Password</p>

        <input type="password" />

      </label>
      <div className="button">
          <button type="button">
            Register
          </button>
        </div>
      <div>

        

        <a href="Home.js"></a>.

      </div>

    </form>

    )
  }
}

  export default register;