import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "./web3";
import lottery from "./lottery";
import web3 from "./web3";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {manager: ''};
  // }

  //ES6
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "Waiting for user to enter in the lottery"
  };
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager: manager, players: players, balance: balance });
  }
  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction sucess ...." });
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({
      manager: manager,
      players: players,
      balance: balance,
      message: "Congratulation!!! You have successfully entered the lottery"
    });
  };
  onClick = async (event) =>{
    this.setState({message:'Waiting on picking winner!!!'})
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({message: 'A winner has been picked!'});
  };

  render() {
    return (
      <div>
        <h1>Lottery Contract</h1>
        <p>
          This contract is managed by {this.state.manager} . &nbsp; There are
          currently {this.state.players.length} people competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} Ether !!!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4> Want to try your Luck ???</h4>
          <div>
            <label>Amount of ether to Enter &nbsp;</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            ></input>
          </div>
          <button>Enter</button>
        </form>

        <hr />
        <h3>Ready to pick up a Winner ??</h3>
        <button onClick={this.onClick}>Pick a Winner</button>
        <hr />
        <h2> Status:- {this.state.message}</h2>
      </div>
    );
  }
}

export default App;
