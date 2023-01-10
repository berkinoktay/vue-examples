const app = Vue.createApp({
    data() {
        return {
            inputVal: '',
        }
    },
    methods: {
        changeInputVal(event) {
            this.inputVal = event.target.value
        }
    }
}).mount('#app')