<template>
  <v-app class='deep-orange lighten-1'>

    <v-card class='blue-grey darken-2' height='250px'>
    <br><br>
      <h1 class="display-2  white--text text-xs-center" style='font-size:6vw;'>REPORT <strong>BUG</strong></h1>
      <br>
      <v-layout justify-center>
      <v-icon class="display-2 text-xs-center white--text">keyboard_arrow_down</v-icon>
      </v-layout>
    </v-card>
  <v-layout justify-center style='margin-top: -64px;' wrap>
    <v-flex sm9>
      <v-card class='grey lighten-2 elevation-5'>
        <v-container>
        <p class="headline text-xs-center"> tell us what kind of <v-icon>bug_report</v-icon> are you getting ?</p>
        <br>
        <p class="title text-xs-center">please email us your problem</p>
        <h1 class="text-xs-center" style='font-size:6vw;'><strong class="">wthreesaver</strong>@gmail.com</h1>
        </v-container>

        <p class="body  text-xs-center"> we will respond you as soon we read your email. feel free to talk with us <br> thank you <strong>- w3saver</strong></p>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn block flat @click='$router.push("/")'>

          <v-icon>keyboard_backspace</v-icon>&nbsp
            go back to home page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-app>
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