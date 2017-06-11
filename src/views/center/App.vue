<template>
  <div class="padding_t_122">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data: () => ({
        from: 'form app'
    }),
    watch: {
        '$route': 'routeChange'
    },
    created () {
    },
    methods: {
        routeChange (to, from) {
        }
    }
}
</script>

<style>
</style>
