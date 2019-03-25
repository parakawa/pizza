<template lang="pug">
	v-toolbar
		v-toolbar-side-icon(@click.stop='drawer = !drawer')
		v-toolbar-title Title
		v-toolbar-items.hidden-sm-and-down
			v-btn(flat='') Link One
			v-btn(flat='') Link Two
			v-btn(flat='') Link Three
</template>
