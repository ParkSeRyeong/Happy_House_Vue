<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main class="mt-5 mainbg" data-stellar-background-ratio="0.5">
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
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
