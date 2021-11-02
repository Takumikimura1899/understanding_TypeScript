var person = {
    name: 'taku',
    age: 28
};
console.log(person.name);
var product = {
    id: 'aaa111',
    price: 10,
    tags: ['good', 'bad'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var id = product.id, first = product.tags[0], title = product.details.title;
var _a = product.tags, ff = _a[1];
console.log(id, first, title, ff);
