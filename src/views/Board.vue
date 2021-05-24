<template>
    <div id="app">
        <h2>게시판</h2>
        <div id="boardList">
            <board-list></board-list>
        </div>

    </div>
</template>

<script>
import BoardList from "@/components/board/BoardList.vue";

export default {
    name: 'Board',
    components: {
        BoardList
    },
}
</script>

<style>
div#boardList{
    text-align: center;
}
</style>