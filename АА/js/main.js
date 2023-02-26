let eventBus = new Vue()

Vue.component('notes', {
    template: `
   <div class="_notes">
    <add-notes/>
    <note-list1 :note_list1="note_list1" ></note-list1> 
  </div>
 `,

    data() {
        return {
            note_list1: [],
            note_list2: [],
            note_list3: [],
            errors: [],
        }
    },
    methods: {

    },

    computed: {

    },
    mounted() {
        console.log("GOGOGO")
        eventBus.$on('fields1-submitted', FieldsField => {
            console.log(FieldsField)
            this.note_list1.push(FieldsField)
            console.log(this.note_list1)
        })
    },
    props: {
        column_1: {
            type: Array,
        },
        column_2: {
            type: Array,
        },
        FieldsField: {
            type: Object,
        },
    },


})





Vue.component('add-notes', {
    template: `
       <form  @submit.prevent="onSubmit">
                        <h1 style="color:#E55A3C">Заметки</h1>
            <div class="note_name">
            <input  type="text" v-model="name" placeholder="Название заметки">
                  
            </div>
            <div class="note_1">
                
                        <input type="text"  v-model="Field1"   placeholder="Введите 1 строку" >
    
                        <input type="text"   v-model="Field2"  placeholder="Введите 2 строку">
    
                        <input type="text"   v-model="Field3"  placeholder="Введите 3 строку">
                                            
            </div>
                <div>                    
                    <p class="sub">
                            <input type="submit" value="Отправить"> 
                    </p> 
                </div>
          </form>
 `,

    data() {
        return {
            note4: false,
            note5: false,
            name: null,
            Field1: null,
            Field2: null,
            Field3: null,




        }
    },
    methods: {
        addField() {
            if (this.note4 === false) {
                return  this.note4 = true
            }

            if (this.note4 === true) {
                return  this.note5 = true
            }

        },
        removeField() {

            if (this.note5 === true) {
                return  this.note5 = false
            }

            if (this.note4 === true) {
                return  this.note4 = false
            }



},

        onSubmit() {
            if (this.name && this.Field1 && this.Field2 && this.Field3 && (!this.note4 || this.Field4) && (!this.note5 || this.Field5)) {
                let FieldsField = {
                    name: this.name,
                    fields: [
                        {name: this.Field1},
                        {name: this.Field2},
                        {name: this.Field3},
                        {name: this.Field4},
                        {name: this.Field5},
                    ],
                }
                eventBus.$emit('fields1-submitted', FieldsField)
                this.name = null
                this.Field1 = null
                this.Field2 = null
                this.Field3 = null
                this.Field4 = null
                this.Field5 = null
            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.Field1) this.errors.push("Field1 required.")
                if (!this.Field2) this.errors.push("Field2 required.")
                if (!this.Field3) this.errors.push("Field3 required.")
            }
        },
    },

    computed: {

    }
})

Vue.component('note-list1', {
    template: `
<div>
            <h2 style="color:#E55A3C">Заметки:</h2>
                    <ul>
                    <div v-for="field in note_list1" style="color:#00FF00">
                          <li v-for="note in field.fields">
                              <p>Name:{{ note.name }}</p>
                              <p>Field1 {{ note.Field1 }}</p>
                              <p>Field2:{{ note.Field2}}</p>
                              <p>Field3:{{ note.Field3 }}</p>
                              <p>Field4:{{ note.Field4 }}</p>
                              <p>Field5:{{ note.Field5 }}</p>  
                          </li>
                    </div>
                    </ul>
</div>
 `,

    data() {
        return {

        }
    },
    methods: {

    },

    computed: {

    },

    props: {
        note_list1: {
            type: Array,
        },
        note_list2: {
            type: Array,
        },
        FieldsField: {
            type: Object,
        },
    },

})

Vue.component('not-list2', {
    template: `
 `,

    data() {
        return {

        }
    },
    methods: {

    },

    computed: {

    }
})
Vue.component('not-list3', {
    template: `
<div>
     
</div>
 `,

    data() {
        return {

        }
    },
    methods: {

    },

    computed: {

    }
})

new Vue({
    el: '#app',
    data: {
    },
})