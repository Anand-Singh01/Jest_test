const {getData} = require('./script2.js');

describe('API call', ()=>{

    //This test verifies that getData correctly retrieves the count of people from the Star Wars API.
    // It expects the count to be equal to 82.
    it('calls swapi to get people count', async ()=>{
        expect.assertions(1);
        const data = await getData();
        expect(data.count).toEqual(82);
    });

    //This test ensures that getData fetches more than 5 results from the Star Wars API.
    // It expects the length of the results array to be greater than 5.
    it('calls swapi to get result count', async ()=>{
        expect.assertions(1);
        const data = await getData();
        expect(data.results.length).toBeGreaterThan(5);
    });
});