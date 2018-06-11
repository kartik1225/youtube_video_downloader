<template>
	<div class="blue-grey darken-2" style="height: 100%;" >
		<v-layout justify-center >
			<div>
				<v-container>


					<v-layout justify-center>
						<v-icon class='display-3 red--text' >warning</v-icon>
					</v-layout>

					<h1 class="display-3 text-xs-center red--text">404</h1>


					<h1 class='display-3 text-xs-center white--text'>this page <br> <strong>does not exist.</strong> </h1>
				</v-container>

						<v-btn large block flat class='amber--text' @click='$router.push("/")'>
							go to home page
						</v-btn>
			</div>
		</v-layout>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {

	    }
	  },
	  beforeCreate(){
	    this.$bus.$emit(`loading`,true)
	  },
	  mounted(){
	    this.$bus.$emit(`loading`,false)
	  }
	}
</script>

<style scoped>

	
</style>