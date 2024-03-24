const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dog pictures.com'
]
describe("googleSearch", ()=>{

    it('is searching google', () => {
        expect(googleSearch('test_test', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog pictures.com']);
    });

    it('can work with undefined and null input', ()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it('returns no more than three matches', ()=>{
        expect(googleSearch('.com', dbMock).length).toBeLessThanOrEqual(3);
        expect(googleSearch('s', dbMock).length).toBeLessThanOrEqual(3);
    });
});