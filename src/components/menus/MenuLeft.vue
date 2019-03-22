<template lang="pug">
    v-navigation-drawer(v-model='drawer', permanent='', absolute='')
        v-toolbar.transparent(flat='')
            v-list.pa-0
                v-list-tile(avatar='')
                    v-list-tile-avatar
                        img(src='https://randomuser.me/api/portraits/men/85.jpg')
                    v-list-tile-content
                        v-list-tile-title John Leider
        v-list
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
        v-list.pt-0(dense='')
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
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>
