describe('allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string', () => {
    it('return all the registration numbers in the string that is for that town', () => {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
        assert.deepEqual(fromStellies, ['CJ 456']);


        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
        assert.deepEqual(fromKuilsriver, []);
    })
})