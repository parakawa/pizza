<template lang="pug">
    v-container(fluid).login-container
        header.header-login.pa-2
            img(src="../static/logo.svg")
            ul
                li
                    button Github
                li 
                    button Tutorial
        nuxt
</template>
<style lang="sass" scoped>
.login-container
    background: $color-main
    height:  100vh
    display: flex
    justify-content: center
    flex-direction: column

.header-login
    display: flex
    align-items: center
    justify-content: space-between
    position: absolute
    top: 0
    left: 0
    right: 0

    ul
        display: flex
        list-style: none


        li
            margin-left: 8px
            button
                text-transform: uppercase
                color: white
                border: none
                background-color: transparent
    img
        height: 48px
</style>
