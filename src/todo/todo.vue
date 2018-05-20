<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus placeholder="なにをするか" @keyup.enter="addTodo">
        <item v-for="todo in todos" :todo="todo" :key="todo.id" @del="deleteTodo"></item>
        <tabs :filter="filter" :todos="todos" @toggle="toggleFilter"></tabs>
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
                filter: "all"
            }
        },
        components: {
            item,
            tabs,
        },
        methods: {
            addTodo(e) {
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
