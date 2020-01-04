import Web3 from 'web3';

let web3;
// web3 from metamask
window.addEventListener('load',async ()=>{
if(window.ethereum){
    window.web3=new Web3(window.ethereum)
    try{
        await window.ethereum.enable();
    }
    catch(err){
        console.log(err);
    }
}
});
web3=new Web3(window.web3.currentProvider);
export default web3;