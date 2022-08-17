describe('takes a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl', () => {
    it('registration numbers in the string for Paarl', () => {
        
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    })
});


