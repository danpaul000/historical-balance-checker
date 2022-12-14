# historical-balance-checker

## Prereqs

Ensure you have `npm` and `node` installed

Install wayback-engine (https://github.com/vicyyn/wayback-engine)

`npm -i wayback-engine`

## Run

Create a newline separated csv file (ie `input.csv`) with a list of pubkeys whose balance you want to check

`node getBalances.js input.csv`
