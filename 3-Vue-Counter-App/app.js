const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            counter2: 0,
        }
    },
    // methods: {
    //?     // Virtual DOM değiştiği için tüm sayfa render olduğundan dolayı 2 fonksiyon da çalıştı.
    //     getCounter1Result() {
    //         console.log("counter 1 çalıştı")
    //         return this.counter1 > 5 ? "5'TEN BÜYÜK" : "5'TEN KÜÇÜK"
    //     },
    //     getCounter2Result() {
    //         console.log("counter 2 çalıştı")

    //         return this.counter2 < 10 ? "10'DAN KÜÇÜK" : "10'DAN BÜYÜK"
    //     }
    // },
    computed: {
        //? Computed kullanıldığında fonksiyon içerisinde hangi stateler kullanıldıysa sadece onlara referans alınır. Bu sayede sadece kullanılan stateler değiştiğinde fonksiyon çalıştırılır. Return etmek zorunludur.
        getCounter1Result() {
            console.log("counter 1 çalıştı")
            return this.counter1 > 5 ? "5'TEN BÜYÜK" : "5'TEN KÜÇÜK"
        },
        getCounter2Result() {
            console.log("counter 2 çalıştı")

            return this.counter2 < 10 ? "10'DAN KÜÇÜK" : "10'DAN BÜYÜK"
        }
    },
    watch: {
        //? Tek bir değei inceler, izler ve değerler değiştiğinde fonksiyon çalışır.
        counter1(newValue, oldValue) {
            console.log(oldValue, " => ", newValue)
        },
        getCounter1Result(newValue, oldValue) {
            console.log(oldValue, " => ", newValue)
        },
    }
}).mount('#app')