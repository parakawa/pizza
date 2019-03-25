<template lang="pug">
	.login
		img(src="../static/vuepizza.svg")
		h3.text-center.white--text.my-3 Examples by the Slice
		v-layout.row
			v-flex.xs12
				v-card.pa-3.card.mt-2
					.card-img
						img(src="../static/user.jpeg")
					p(v-if="showMessage") Password o Contraseña incorrecto
					.card-content.mt-2
						v-text-field(v-model='email', :rules='emailRules', label='E-mail', required='')
						v-text-field.my-3(
							v-model='password',
							:append-icon="show1 ? 'visibility' : 'visibility_off'", 
							:rules='[rules.required, rules.min]', :type="show1 ? 'text' : 'password'", 
							name='input-10-1', 
							label='Normal with hint text', 
							hint='At least 8 characters', 
							counter='', 
							@click:append='show1 = !show1')
					.card-actions
						v-btn(:disabled="isComplete" @click="submit()") Login
						//- router-link(to="/dashboard")
						//- 	a /LOgin
</template>

<script> 
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapState, mapActions } from 'vuex'


export default { 
    layout: 'Login', 
    data () {
      return {
        email: '',
		show1: false,
		showMessage: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
		},
		validations: {
			email: {
				required,
				email
			},
			password: {
				required,
			}
		},
		methods: {
			...mapActions('login', [
				'validateEmailandPass',
				]
			),
			async submit() {
				let response = await this.validateEmailandPass({email:this.email, pass:this.password})
				if(response) this.$router.push('/dashboard')
				else this.showMessage = true;
			}
		},
		computed:	{
			isComplete() {
				return this.$v.$invalid
			},
			Popup() {

			},
		}
  }
</script>

<style lang="sass" scoped>
.container-login
	display: flex
	align-items: center
	justify-content: center
.card-img
	display: flex
	align-items: center
	justify-content: center
	margin: 1em 0
	img
		border-radius: 50%
		height:	100px

.login
	display: flex
	align-items: center
	flex-direction: column
	img
		max-width: 200px
	.card
		max-width: 370px
		min-width: 33vh
	button
		background-color: $color-secondary !important
		width: 100%
		display: block
		margin: 0 auto

</style>

