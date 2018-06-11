<template>
  <div style="height: 100%;" class='blue-grey darken-2'>

    <v-container >
      <v-container style='margin-top:20%;'>
        <v-layout row wrap justify-center>
          <img :width="$vuetify.breakpoint.width > 600?`300px`:`200px`" src='../../static/w3Logo.svg'/>
        </v-layout>        
      </v-container>
        
      <!-- serchbar  -->
      <searchBar></searchBar>
      <br>
        <div>
          <!-- about tip and site fetures info -->
            <v-layout row justify-center>
              <v-flex xs12 sm4 md6>
                <v-card class='blue-grey darken-1'>
                      <v-container grid-list-md>

                      <v-layout justify-center>
                        
                        <v-icon left dark>wb_incandescent</v-icon><span class="white--text">Tip</span>
                      </v-layout>



                      <p :class="`${$vuetify.breakpoint.width > 600?`subheading`:`body-2`} white--text text-xs-center`"><strong>Add W3</strong> in link to instantly download videos</p>


                      <p class="white--text title text-xs-center">www.<span
               class="txt-rotate amber--text"
               data-period="2000"
               data-rotate='[ "w3"]'></span>youtube.com/...</p>

                      </v-container>
                     <v-divider dark></v-divider>

                      <p style="padding: 10px;" class="white--text text-xs-center"><v-icon dark>fiber_new</v-icon> Now download every video in <span class="amber--text">mp3 format</span></p>

              </v-card>

              <!-- more info about donation and about -->
              <div>
                <v-layout row wrap justify-center>
                  <v-flex xs12 sm6>
                    <v-container >
                      <p class="text-xs-center subheading white--text">Currently works with</p>
                        <img style="width: 100px; height: auto; margin-left: auto; margin-right: auto; display: block;" src='../../static/youtube_logo.png'>
                    </v-container>
                  </v-flex>

                  <v-divider dark></v-divider>

                  <v-flex xs12 sm6>
                    <v-container>
                      <p class="text-xs-center subheading white--text">To donate</p>
                      <div v-ripple role='button' @click='donate'>
                        <img button style="width: 80px; height: auto; margin-left: auto; margin-right: auto; display: block; margin-top: -25px;" src='../../static/pp.png'>
                      </div>
                    </v-container>
                  </v-flex>
                </v-layout>
              </div>

              </v-flex>

            </v-layout>
        </div>

        

    </v-container>

</div>
</template>

<script>
  import textAni from './textAni.js'
  import searchBar from './searchBar.vue'

  export default{
    components:{
      searchBar
    },
    data(){
      return{

      }
    },
    methods:{
      donate(){

        window.location = 'https://www.paypal.me/kartikgarasia'
      }
    }
  }

</script>

<style>

</style>