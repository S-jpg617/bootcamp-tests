describe('fromWhere is a function that takes a car registration number as a parameter and returns the town the car is from', function () {
    it('it should return the town from where the car came from based on the given parameter', function() {
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
    })
})