const Counter = {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(){
            return this.counter++;
        },
        minus(){
            return this.counter--;
        },
    },
    template: `
    <div>
        <h2>{{counter}}</h2>
        <button @click="add">count+</button>
        <button @click="minus">count-</button>
    </div>
    `,
}

// Vue.component('Counter', {
//     props: {  },

//     data() {
//         return {
            
//         }
//     },

//     template: '',
// });