describe('the greet function',()=>{
    it('should greet user with the given name parameter',()=>{
        assert.equal(greet('Bob'),'Hello, Bob')
    })
})