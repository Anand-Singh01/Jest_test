const {getData} = require('./script2.js');

describe('API call', ()=>{

    it('calls swapi to get people count', async ()=>{
        expect.assertions(1);
        const data = await getData();
        expect(data.count).toEqual(82);
    });

    it('calls swapi to get result count', async ()=>{
        expect.assertions(1);
        const data = await getData();
        expect(data.results.length).toBeGreaterThan(5);
    });
})