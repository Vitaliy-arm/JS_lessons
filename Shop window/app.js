const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400,
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: Добавить проверку наличия товара в заказе (при наличии выдавать alert, чт отоавар уже в корзине)

    // TODO: если товар еще не в корзине, добавить его из массива products

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    // TODO: опишите функционал общей стоимости заказа

    // Не меняйте эту строчку
    document.getElementById('total').innerText = rerenderTotalPrice;
}

// Этот остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.inertHTML = '';
    order.forEach((item) => {
        const e1 = document.createElement('1i');
        e1.innerText = item.title;
        e1.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    }
);
}