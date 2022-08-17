describe('isWeekday that takes a string parameter - to find out if the parameter passed in is a day of the week', () => {
    it('returns true is a parameter is a day of the week, else false', () => {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    })
})