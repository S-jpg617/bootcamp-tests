describe('totalPhoneBill takes in a string calls made and "SMSs" sent. Calculate the total bill for the data provided.',function(){
    it('it should return total bill for the given string param',function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })
})