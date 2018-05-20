<template>
    <div :class="['todo-item',todo.completed?'todo-completed':'']">
        <input
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destroy" @click="deleteTodo"></button>
    </div>
</template>
<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteTodo() {
                this.$emit('del', this.todo.id);
            }
        }
    }

</script>
<style lang="less" scoped>
    .todo-item {
        position: relative;
        background-color: #fff;
        font-size: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &:hover {
            .destroy:after {
                content: '×'
            }
        }
        label {
            white-space: pre-line;
            text-overflow: ellipsis;
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: all 0.4s;

        }
        &.todo-completed {
            label {
                color: #d9d9d9;
                text-decoration: line-through;
            }
        }
    }

    .toggle {
        text-align: center;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 0;
        margin: -20px 0 0 0;
        border: none;
        outline: none;
        -webkit-appearance: none;
        &:before {
            content: url("../assets/images/round.svg");
            position: absolute;
            left: 12px;
            cursor: pointer;
        }
        &:checked:before {
            content: url("../assets/images/done.svg");
            position: absolute;
            left: 12px;
            cursor: pointer;
        }
    }


    .destroy {
        position: absolute;
        top: 50%;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-top: -20px;
        transition: color 0.2s ease-out;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
    }

</style>
