<template lang="pug">
    v-container(fluid)
        MenuLeft
        nuxt
</template>
<script>
import MenuLeft from '../components/menus/MenuLeft'
import MenuHeader from '../components/menus/MenuHeader'

export default {
    components: {
        MenuLeft,
        MenuHeader,
    }
}
</script>

