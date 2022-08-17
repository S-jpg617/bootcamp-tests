describe('checks transport fee based on the shift param',()=>{
    it('return fee based on the given parameter',()=>{
        assert.equal(transportFee('morning'),'R20')
    })
})