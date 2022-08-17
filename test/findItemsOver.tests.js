describe('The function takes a list of objects and should return all the products that have a quantity higher than given parameter x', function () {
    it('returns the list of items with quantıty above x', function () {
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

        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(results, findItemsOver20(itemList,25))
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    })
})