# tabnews

create fix-migrations-endpoint branch

`"test": "npm run services:up && npm run wait-for-postgres && concurrently -n next,jest --hide next -k -s command-jest \"sleep 1;next dev\" \"jest --runInBand\"",`


`"test": "npm run services:up && npm run wait-for-postgres && concurrently -n next,jest \"sleep 3 && next dev\" \"jest --runInBand\"",`

# Actions