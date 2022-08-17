describe('checks if a registration number is for GP, L, EC, MP registration plates',()=>{
    it('returns true condition is satisfied',()=>{
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    })
})