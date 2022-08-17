describe('Registration numbers for Bellville starts with CY',()=>{
    it('function returns true for all the functions starting with CY',()=>{
        assert.equal(isFromBellville('CY 123'), true);
    })
})