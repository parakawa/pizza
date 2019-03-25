<template lang="pug">
    v-layout(wrap='')
        v-toolbar.v-menuHeader(:class="{ 'menuHeader--sidebar-open': isActive}")
            v-toolbar-side-icon(@click.stop='toggleSidebar()')
            v-toolbar-title Dashboard
        v-navigation-drawer.v-navigation(
            v-model='isActive',
            fixed
            :mobile-break-point="1904"
            touchless
            dark)
            .menuLeaftHeader
                v-toolbar.transparent(flat='')
                    v-list.pa-0
                        v-list-tile(avatar='')
                            v-list-tile-avatar.img-avatar
                                img(src='https://randomuser.me/api/portraits/men/85.jpg')
                v-list
                    v-list-group(prepend-icon='account_circle', value='false')
                        template(v-slot:activator='')
                            v-list-tile
                                v-list-tile-title David
                        v-list-group(no-action='', sub-group='', value='false')
                            template(v-slot:activator='')
                                v-list-tile
                                    v-list-tile-title Admin
                        v-list-group(sub-group='', no-action='')
                            template(v-slot:activator='')
                                v-list-tile
                                    v-list-tile-title Actions                       
            v-list.pt-0(dense='').listItems
                v-divider
                v-list-tile(v-for='(item,i) in items', :key='i', @click='')
                    v-list-tile-action
                        v-icon {{ item.icon }}
                    v-list-tile-content
                        v-list-tile-title {{ item.title }}
                v-list-tile
                    v-list-tile-action
                        v-icon home
                    v-list-tile-title Home
                v-list-group(prepend-icon='account_circle', value='true')
                    template(v-slot:activator='')
                        v-list-tile
                            v-list-tile-title Users
                    v-list-group(no-action='', sub-group='', value='true')
                        template(v-slot:activator='')
                            v-list-tile
                                v-list-tile-title Admin
                    v-list-group(sub-group='', no-action='')
                        template(v-slot:activator='')
                            v-list-tile
                                v-list-tile-title Actions
        
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    },
    computed: {
        isActive: {
        get () {
            return this.$store.state.dashboard.sidebar.visible
        },
        set (val) {
            this.$store.dispatch('dashboard/updateSidebar', { visible: val })
            }
        }
    },  
    methods: {
        toggleSidebar(){
            this.$store.dispatch('dashboard/updateSidebar', { visible: !this.$store.state.dashboard.sidebar.visible })
            }
        },
    mounted() {
        this.$nextTick(function () {
            console.log('esto',this.$route)
        })
    },  
  }
</script>
<style lang="sass">
.v-toolbar.v-menuHeader
    position: absolute
    top: 0
    left: 0
.menuHeader--sidebar-open
    padding-left: 300px !important
</style>
