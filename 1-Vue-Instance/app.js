const app = Vue.createApp({
    data() {
        return {
            title: 'Vue.js Instance',
            description: 'Bu bilgi Vue tarafından data içerisinde tanımlanmıştır.',
            link: {
                url: 'https://www.google.com',
                text: 'Google Git',
                target: '_blank',
            },
            coords: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        changeTitle(text) {
            this.title = text
        },
        updateCoordinates(text, event) {
            console.log(text, event)
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        }
    }

}).mount('#app')

/*
Vue2 Version
const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue.js Instance',
        description: 'Bu bilgi Vue tarafından data içerisinde tanımlanmıştır.',
        link: {
            url: 'https://www.google.com',
            text: 'Google Git',
            target: '_blank',
        }
    },
    methods: {
        changeTitle(text) {
            this.title = text
        }
    }
    }
})

*/