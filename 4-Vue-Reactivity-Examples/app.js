const app = Vue.createApp({
    data() {
        return {
            search: '',
            itemList: ['Ahmet', "Berkin", "Rumeysa", 'Sıla', "Mehmet"],
            // filteredList: []
        }
    },
    methods: {
        // filterList() {
        //     this.filteredList = this.itemList.filter(item => item.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
        // }
    },
    computed: {
        getFilteredList() {
            return this.itemList.filter(item => item.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
        }
    }
}).mount('#app')