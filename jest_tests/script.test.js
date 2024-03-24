const {googleSearch} = require('./script');

//Dummy data
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dog pictures.com'
]

describe("googleSearch", ()=>{

    //This Jest test case validates the behavior of the googleSearch function for
    //two search terms: 'test_test' and 'dog'. It checks if the function returns an
    //empty array when there are no matches for the first term and if it returns the
    //expected matches for the second term.
    it('is searching google', () => {
        expect(googleSearch('test_test', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog pictures.com']);
    });


    // This Jest test case examines how the googleSearch function handles undefined and null inputs.
    // It verifies that when the search input is either undefined or null,
    // the function returns an empty array, denoted by [].
    it('can work with undefined and null input', ()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });


    //This Jest test case checks if the googleSearch function returns no more than three matches
    // for different search terms. It ensures that regardless of the input, the function's output
    // does not exceed three matches.
    it('returns no more than three matches', ()=>{
        expect(googleSearch('.com', dbMock).length).toBeLessThanOrEqual(3);
        expect(googleSearch('s', dbMock).length).toBeLessThanOrEqual(3);
    });
});