# Historical Account Balance Checks

This tool consumes a list of Solana pubkeys and creates an output CSV file containing the pubkeys and their SOL balances at a pre-determined historical slot height.

## Prereqs

Ensure you have `npm` and `node` installed

Install wayback-engine (https://github.com/vicyyn/wayback-engine)

`npm -i wayback-engine`

## Run

Create a newline separated csv file (ie `input.csv`) with a list of pubkeys whose balance you want to check

`node getBalances.js input.csv`

Results are written to `output-<DATE><TIME>.csv`
