const fs = require('fs');
const { clusterApiUrl, Connection, PublicKey } = require('@solana/web3.js');
const { getBalanceAtSignature, getBalanceAtBlocktime, getBalanceAtSlot } = require('wayback-engine');

const args = process.argv;

const inputFilePath = args[2];
let outputFilePath = `output_${(new Date().toJSON())}.csv`;
console.log("Output stored in", outputFilePath);

async function collectAndPrintBalance() {
  const connection = new Connection(clusterApiUrl('mainnet-beta'));
  
  // Slot 114226392 occured at 00:00 UTC on Jan 1, 2022
  // https://explorer.solana.com/block/114226392
  const slot = 114226392;

  const inputData = fs.readFileSync(inputFilePath, 'utf8');
  const inputEntries = inputData.toString().slice(0, -1).split('\n');

  // Iterate over the entries in the input file
  for (const addr of inputEntries) {
    const address = new PublicKey(addr);
    const balance_in_lamports = await getBalanceAtSlot(connection, address, slot);
    let balance_in_sol = balance_in_lamports / 1000000000;
    
    console.log(addr, balance_in_sol);
    fs.appendFileSync(outputFilePath, `${address},${balance_in_sol}\n`);
  }
	
}

collectAndPrintBalance();
