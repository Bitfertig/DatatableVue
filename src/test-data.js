window.demos = [];

// -----------------------------------------------------------------

demos[0] = {
    description: {
        name: 'Example with flags',
        text: ''
    },
    options: {
        key: 'id',
        dom_table_attributes: {class:'table table-striped w-100'},
        dom_table_thead_attributes: {class:'table-dark'},
        dom_table_tbody_attributes: {}
    },
    columns: [
        'id',
        'name',
        'flag'
    ],
    items: [
        {
            id: 1,
            name: 'US',
            flag: '🇺🇸'
        },
        {
            id: 2,
            name: 'DE',
            flag: '🇩🇪'
        },
        {
            id: 3,
            name: 'CN',
            flag: '🇨🇳'
        },
        {
            id: 4,
            name: 'JP',
            flag: '🇯🇵'
        },
        {
            id: 5,
            name: 'RU',
            flag: '🇷🇺'
        },
        {
            id: 6,
            name: 'IT',
            flag: '🇮🇹'
        },
        {
            id: 7,
            name: 'ES',
            flag: '🇪🇸'
        },
        {
            id: 8,
            name: 'KR',
            flag: '🇰🇷'
        },
        {
            id: 9,
            name: 'FR',
            flag: '🇫🇷'
        }
    ]
};

// -----------------------------------------------------------------

demos[1] = {
    description: {
        name: 'Example with flowers',
        text: ''
    },
    //options: {},
    columns: [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Names' },
        { name: 'flower', text: 'Flowers' }
    ],
    items: [
        {
            id: 1,
            name: 'Tulip',
            flower: '🌷'
        },
        {
            id: 2,
            name: 'Rose',
            flower: '🌹'
        },
        {
            id: 3,
            name: 'Sunflower',
            flower: '🌻'
        },
        {
            id: 4,
            name: 'Blossom',
            flower: '🌼'
        }
    ]
};

// -----------------------------------------------------------------

demos[2] = {
    description: {
        name: 'Example with food',
        text: ''
    },
    search: 'b',
    options: {},
    columns: [
        'id',
        'name',
        'food'
    ],
    items: [
        {
            id: 1,
            name: 'Beef',
            food: '🥩'
        },
        {
            id: 2,
            name: 'Bacon',
            food: '🥓'
        },
        {
            id: 3,
            name: 'Maize',
            food: '🌽'
        }
    ]
};

// -----------------------------------------------------------------

/* demos[5] = {
    description: {
        name: 'Example ...',
        text: ''
    },
    items: [
        {id:1, name:'Jim', category:'Dies'},
        {id:2, name:{text:'"Bobby"', value:'Bob'}, category:'Das'}
    ],
    columns:[
        {name:'drag', text:''},
        {name:'id', text:'ID'},
        //{name:'order', text:'R'},
        {name:'name', text:'Name'},
        {name:'category', text:'Kategorie'},
        {name:'price', text:'Preis', attributes:{class:'text-right'}},
        {name:'gear', text:'<span class="mdi mdi-settings-outline" title="Steuerung"></span>', enable_html:true, attributes:{class:'text-right'}}
    ],
    options: {
        key: 'id',
        dom_table_attributes: {class:'table table-striped w-100'},
        dom_table_thead_attributes: {class:'table-dark'},
        dom_table_tbody_attributes: {},
        order_by: ['order'],
        draggable: true,
        draggable_attributes: {handle:'.handle'},
        //draggable_start: function(evt, key, items){},
        //draggable_end: function(evt, key, items){},
    }
}; */

