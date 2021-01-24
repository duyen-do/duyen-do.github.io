// mảng danh sách sản phẩm của giỏ hàng
const cart_products = [{
    MaSP: 'SP001',
    TenSP: 'Tên sản phẩm 1',
    SoLuong: 1,
    Gia: 2000000,
    HinhAnh: 'san-pham-1-1.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP002',
    TenSP: 'Tên sản phẩm 2',
    SoLuong: 1,
    Gia: 3100000,
    HinhAnh: 'san-pham-2-1.jpg',
    URL: 'san-pham-2.html'
}, {
    MaSP: 'SP003',
    TenSP: 'Tên sản phẩm 3',
    SoLuong: 1,
    Gia: 1000000,
    HinhAnh: 'san-pham-3-1.jpg',
    URL: 'san-pham-3.html'
}];

// load ds sản phẩm lần đầu
loadCart();

function loadCart() {
    // add products to cart
    var list = $("#cart-products");
    list.html("");
    let count = 0;
    let total = 0;
    for (let i = 0; i < cart_products.length; i++) {
        let product = cart_products[i];
        if (product == undefined) continue;
        list.append("<div class=\"content\">\
                <div class=\"product\">\
                    <img src=\"assets/image/products/" + product.HinhAnh + "\" alt=\"...\">\
                    <span class=\"content\">\
                        <a href=\"" + product.URL + "\">[" + product.MaSP + "] " + product.TenSP + "</a>\
                        <p><span class=\"quantity\">" + product.SoLuong + "</span> " + formatNumber(product.Gia) + "đ</p>\
                    </span>\
                    <span class=\"remove\" onclick=\"remove('" + i + "')\">&times;</span>\
                </div>\
            </div>");
        total += product.Gia;
        count++;
    }
    $(".cart-products .total.right").html(formatNumber(total) + "đ");
    $(".cart-count").html(count);
}

// xoá 1 sản phẩm theo mã
function remove(id) {
    delete cart_products[id];
    loadCart();
}

// mảng danh sách sản phẩm nổi bật
const hot_products = [{
    MaSP: 'SP001',
    TenSP: 'Tên sản phẩm 1',
    Gia: 2000000,
    HinhAnh1: 'san-pham-1-1.jpg',
    HinhAnh2: 'san-pham-1-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP002',
    TenSP: 'Tên sản phẩm 2',
    Gia: 2000000,
    HinhAnh1: 'san-pham-2-1.jpg',
    HinhAnh2: 'san-pham-2-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP003',
    TenSP: 'Tên sản phẩm 3',
    Gia: 2000000,
    HinhAnh1: 'san-pham-3-1.jpg',
    HinhAnh2: 'san-pham-3-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP004',
    TenSP: 'Tên sản phẩm 4',
    Gia: 2000000,
    HinhAnh1: 'san-pham-4-1.jpg',
    HinhAnh2: 'san-pham-4-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP005',
    TenSP: 'Tên sản phẩm 5',
    Gia: 2000000,
    HinhAnh1: 'san-pham-5-1.jpg',
    HinhAnh2: 'san-pham-5-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP006',
    TenSP: 'Tên sản phẩm 6',
    Gia: 2000000,
    HinhAnh1: 'san-pham-4-1.jpg',
    HinhAnh2: 'san-pham-4-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP007',
    TenSP: 'Tên sản phẩm 7',
    Gia: 2000000,
    HinhAnh1: 'san-pham-3-1.jpg',
    HinhAnh2: 'san-pham-3-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP008',
    TenSP: 'Tên sản phẩm 8',
    Gia: 2000000,
    HinhAnh1: 'san-pham-1-1.jpg',
    HinhAnh2: 'san-pham-1-2.jpg',
    URL: 'san-pham-1.html'
}];
loadHot();

function loadHot() {
    // add products to hot products
    var list = $("#hot-products");
    list.html("");
    for (product of hot_products) {
        if (product == undefined) continue;
        list.append("<div class=\"col-3\">\
        <div class=\"product-card\">\
            <div class = \"product-image\">\
                <img src=\"assets/image/products/" + product.HinhAnh1 + "\" alt=\"...\" class=\"first-image\">\
                <img src=\"assets/image/products/" + product.HinhAnh2 + "\" alt=\"...\" class=\"second-image\">\
                <div class=\"action\">\
                    <a href=\"#\"><i class=\"fa fa-cart-plus\"></i></a>\
                    <a href=\"#\"><i class=\"fa fa-eye\"></i></a>\
                </div>\
            </div>\
            <div class=\"product-content\">\
                <a href=\"" + product.URL + "\">[" + product.MaSP + "] " + product.TenSP + "</a>\
                <p>" + formatNumber(product.Gia) + "đ</p>\
            </div>\
        </div>\
    </div>");
    }
}

// mảng danh sách sản phẩm bán chạy
const bestsale_products = [{
    MaSP: 'SP001',
    TenSP: 'Tên sản phẩm 1',
    Gia: 2000000,
    HinhAnh1: 'san-pham-4-1.jpg',
    HinhAnh2: 'san-pham-4-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP002',
    TenSP: 'Tên sản phẩm 2',
    Gia: 2000000,
    HinhAnh1: 'san-pham-3-1.jpg',
    HinhAnh2: 'san-pham-3-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP003',
    TenSP: 'Tên sản phẩm 3',
    Gia: 2000000,
    HinhAnh1: 'san-pham-5-1.jpg',
    HinhAnh2: 'san-pham-5-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP004',
    TenSP: 'Tên sản phẩm 4',
    Gia: 2000000,
    HinhAnh1: 'san-pham-1-1.jpg',
    HinhAnh2: 'san-pham-1-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP005',
    TenSP: 'Tên sản phẩm 5',
    Gia: 2000000,
    HinhAnh1: 'san-pham-4-1.jpg',
    HinhAnh2: 'san-pham-4-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP006',
    TenSP: 'Tên sản phẩm 6',
    Gia: 2000000,
    HinhAnh1: 'san-pham-2-1.jpg',
    HinhAnh2: 'san-pham-2-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP007',
    TenSP: 'Tên sản phẩm 7',
    Gia: 2000000,
    HinhAnh1: 'san-pham-3-1.jpg',
    HinhAnh2: 'san-pham-3-2.jpg',
    URL: 'san-pham-1.html'
}, {
    MaSP: 'SP008',
    TenSP: 'Tên sản phẩm 8',
    Gia: 2000000,
    HinhAnh1: 'san-pham-4-1.jpg',
    HinhAnh2: 'san-pham-4-2.jpg',
    URL: 'san-pham-1.html'
}];
loadBestSale();

function loadBestSale() {
    // add products to best sale products
    var list = $("#bestsale-products");
    list.html("");

    for (product of bestsale_products) {
        if (product == undefined) continue;
        list.append("<div class=\"col-3\">\
            <div class=\"product-card\">\
                <div class = \"product-image\">\
                    <img src=\"assets/image/products/" + product.HinhAnh1 + "\" alt=\"...\" class=\"first-image\">\
                    <img src=\"assets/image/products/" + product.HinhAnh2 + "\" alt=\"...\" class=\"second-image\">\
                    <div class=\"action\">\
                        <a href=\"#\"><i class=\"fa fa-cart-plus\"></i></a>\
                        <a href=\"#\"><i class=\"fa fa-eye\"></i></a>\
                    </div>\
                </div>\
                <div class=\"product-content\">\
                    <a href=\"" + product.URL + "\">[" + product.MaSP + "] " + product.TenSP + "</a>\
                    <p>" + formatNumber(product.Gia) + "đ</p>\
                </div>\
            </div>\
        </div>");
    }
}