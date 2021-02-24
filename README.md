# Ethereum-Lottery-Contract-part-2
+ React App where you can join a lottery contract and can win __Rinkbey test network__ Ether.
+ you can deploy another contract and can update [lottery.js](/src/lottery.js) address and abi (but functionality should be same as in [App.js](/src/App.js))

## To run the React app:-
+ `sudo npm install -g create-react-app` (anywhere)
+ `create-react-app lottery-react` (where you want to create app)
+ `npm install --save web3@1.0.0-beta.35`
+ (Metamask plugin in google chrome) with sufficient ether in __Rinkbey Test Network__ (greater than 0.01 ether)
+ Then either merge the repo,
+ or :-
  * __Replace__ src/App.js with repo [src/App.js](/src/App.js)
  * __Add__ [src/web3.js](/src/web3.js) and [src/lottery.js](/src/lottery.js) inside src directory
+ Finally run `npm run start` to start React App
## Contributor:-
* <a href="https://github.com/thisismanishkumar">Manish Kumar</a>
