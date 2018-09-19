exports.create = (id, name, price) => {
    const products = db.products(action.account, action.account);
    const data = products.emplace(action.account, {
        id: id,
        name: name,
        price: price,
    });
    console.log('save product result:', data);
};

exports.query = id => {
    const products = db.products(action.account, action.account);
    const data = products.get(id);
    console.log('get product by id', id, ' result:', data);
    return data;
};