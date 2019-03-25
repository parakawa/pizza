<template lang="pug">
v-container(fluid)
	v-layout.main(:class="{ 'main--sidebar-open': sidebarVisibility }")
		v-flex.xs12.md6
			v-card.mb-5
				v-card-title
					h3.headline Title
</template>
<script>
export default {
	layout: 'Dashboard',
computed: {
    sidebarVisibility () {
      return this.$store.state.dashboard.sidebar.visible
    }
  }	
}
</script>
<style lang="sass" scoped>
.main
	padding: 63px

.main--sidebar-open
	padding-left: 300px
</style>


