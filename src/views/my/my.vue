<template>
  <div class="container padding_b_120">

  </div>
</template>
<script>
export default{
    data () {
        return {
            indexData: []
        }
    },
    mounted: function () {
        this.$http.get('../../../static/api/center/getCenter.json').then((response) => {
            // indexData，然后html就可以遍历
            console.log(response.data)
            this.indexData = response.data
        }, (response) => {
            console.log(response)
        })
    },
    components: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
</style>"
