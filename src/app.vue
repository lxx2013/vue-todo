<template>
    <div id='app' >
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './todo/header.vue'
    import Footer from './todo/footer.vue'
    import Todo from './todo/todo.vue'
    export default {
        components: {
            Header,
            Footer,
            Todo
        }
    }

</script>
<style lang="less" scoped="true">
    #app {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
    }

    #cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: url(./assets/images/bg.jpeg);
        background-size: cover;
        background-position: center center;
        transform:scale(1.2);
        opacity: 1;
        z-index: -1;
    }
    .blur{
        filter: blur(10px);
        box-shadow: inset 0 0 5px  #444;
    }

</style>
