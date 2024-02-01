document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000 },
            { id: 2, name: 'Robusta Blend', img: '2.jpg', price: 25000 },
            { id: 3, name: 'Primo Passo', img: '3.jpg', price: 30000 },
            { id: 4, name: 'Aceh Gayo', img: '4.jpg', price: 25000 },
            { id: 5, name: 'Arabica Blend', img: '5.jpg', price: 25000 }
        ]
    }));
    // Cart Store
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,

        add(newItem) {

            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if (!cartItem) {

                this.items.push({ ...newItem, quantity: 1, total: newItem.price });   // {...} <- artinya kita pecah dl || untuk memasukan newItem kedalam variable diatas (variable yg msh satu medth cukup pakai this)
                this.quantity++;   // ini untuk menambah total nya
                this.total += newItem.price;  //  Ini untuk menambah total
            } else {
                // Jika barang sudah ada / cek apakah barang beda atau sama dengan yang ada di cart
                // kita telusuri lg this.items
                this.items = this.items.map((item) => {
                    // Jika barang berbeda, kita cek 
                    if (item.id !== newItem.id) {
                        return item;  // ini akan menghasilkan keluar dari pencarian
                    } else {
                        // Jika barang sudah ada, maka tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;   // ini untuk menambah total nya
                        this.total += item.price;  //  Ini untuk menambah total
                        return item;
                    }

                })
            }

        },

        remove(id) {
            // Kita ambil dahulu item yang akan diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            //Jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // Kita telusuri 1 demi 1
                this.items = this.items.map((item) => {
                    //Jika bukan barang yng di klik maka akan dilewati
                    if (item.id !== id) {
                        return item;  // ini akan melewatkan / skip
                    } else {
                        // Jika benar maka kita kurangi
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {

                // Jika barang nya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }

    });

});



// Form Validation
const checkoutButton = document.querySelector('.checkout-button');
// secara default kita kasih disable
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function (e) {
    for (let i = 0; i < form.elements.lenght; i++) {
        if (form.elements[i].value.lenght !== 0) {
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        } else {
            return false;
        }
    }

    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
    e.preventDefault();
})

//  Kirim ada ketika button checkout di klik
checkoutButton.addEventListener('click', function (e) {

    const formData = new FormData(form);
    // kita tidak tulis method pengambilan data get/post, tp secara default itu get maka kita ambil dari js
    const data = new URLSearchParams(formData);
    // kemudian kita konversi ke objek spt dibawah
    const objData = Object.fromEntries(data);
    e.preventDefault();
});


// Conversi Ke Rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};