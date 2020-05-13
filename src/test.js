var app = new window.Vue({
    el: '#app',
    components: {
        'datatable-component': window.httpVueLoader('src/datatable.vue')
    },
    data: function() { 
        return {
            demos_index: 0,
            demos: window.demos,

            demo_search: ''
        }
    },
    mounted: function () {
        
    },
    watch: {
        demo_index: function() {
            if ( typeof this.demo().search !== 'undefined' ) this.demo_search = this.demo().search;
        }
    },
    methods: {
        demo: function() {
            return this.demos[this.demos_index];
        },
        description: function() {
            return typeof this.demo().description !== 'undefined' ? this.demo().description : '';
        },
        items: function () {
            return typeof this.demo().items !== 'undefined' ? this.demo().items : '';
        },
        columns: function () {
            return typeof this.demo().columns !== 'undefined' ? this.demo().columns : '';
        },
        options: function () {
            return typeof this.demo().options !== 'undefined' ? this.demo().options : '';
        },
        search: function () {
            return typeof this.demo().search !== 'undefined' ? this.demo().search : '';
        }
    }
});
