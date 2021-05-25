<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main class="mainbg">
            <transition name="fade" origin="center" mode="out-in" :duration="500">
                <router-view/>
            </transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>

export default {
  components: {
  }
};
</script>
