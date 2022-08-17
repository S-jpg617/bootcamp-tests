describe('The function takes a list of objects and should return all the products that have a quantity higher than 20', function () {
    it('returns the list of items with quantıty above 20', function () {
        const itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];

        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver20(itemList))
    })
})