describe('takes in a string parameter that looks like this "CA 182736,CY 523519,CJ 812328" and returns the number of registration numbers in the string', () => {
    it('returns the number of registration numbers in the string', () => {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })
})