describe('yearsAgo that takes in a year and return how many years ago that year is from the current year', () => {
    it('find difference between years', () => {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
});
