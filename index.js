new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todos: [{
                title: 'bangun',
                completed: false,
            },
            {
                title: 'mandi',
                completed: true,
            }
        ],
        newTodo: '',
        count:0
    },
    methods: {
      addTodo(){
        this.todos.push({
          title: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      },
      deleteTodo(todo){
      //  console.log(todo);
         let update=this.todos.filter(function(tod){
              return tod.title!==todo
        })
        this.todos=update
      }
    }
})
