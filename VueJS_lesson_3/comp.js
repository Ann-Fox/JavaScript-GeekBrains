Vue.component('new-component', {
    props: ['title'],

    data() {
        return {
// title: 'Title'
        }
    },

    template: `
    <div>
        <h3>{{title}}</h3>
        <p> New template for Vue</p>
    </div>`,
});

Vue.component('Comp', {
    props: {  },

    data() {
        return {
            
        }
    },

    template: '',
});

Vue.component('standart-comp', {

    data() {
        return { message: 'text massege' }

    },
    methods: {
        newInfo() {
            console.log('hello world');
        }
    },
    computed: {
        newComp() {
            return this.message;
        }
    },
    template: '<h2>standart template</h2>'
})