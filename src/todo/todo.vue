<template>
    <section id="real-app" class="real-app">
        <input type="text" class="add-input" autofocus :placeholder="placeholder" @keyup.enter="addTodo">
        <item v-for="todo in show_todos" :todo="todo" :key="todo.id" @del="deleteTodo"></item>
        <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clear="clear"></tabs>
    </section>
</template>


<script>
    import item from './item.vue'
    import tabs from './tabs.vue'
    let id = 0;
    export default {
        data() {
            return {
                todos: [],
                filter: "all",
                placeholder:"なにをしますか"
            }
        },
        components: {
            item,
            tabs,
        },
        computed:{
            show_todos:function(){
                 return this.todos.filter(todo=> {
                    let filter = this.filter;
                    if(filter == "all"){
                        return 1;
                    }
                    else {
                        return filter=="active"?!todo.completed:todo.completed;
                    }
                })}
        },
        methods: {
            addTodo(e) {
                if(!e.target.value || e.target.value.replace(/\s/g,"").length==0){
                    e.target.value = "";
                    this.placeholder="输入不能为空";
                    return;
                }
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                })
                e.target.value = ' ';
            },
            deleteTodo(id) {
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },
            toggleFilter(state) {
                this.filter = state;
            },
            clear(){
                //alert('clear')
                this.todos = this.todos.filter(a=> a.completed==false)
            }
        }
    }

</script>
<style scoped>
    .real-app {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #444;
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        box-sizing: border-box;
        font-size: 24px;
        line-height: 1.4em;
        outline: none;
        padding: 16px 32px;
    }

</style>
