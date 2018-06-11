<template>
  <v-app id="inspire">
    <v-toolbar
      color="blue-grey darken-2"
      dark
      fixed
      app
      clipped-right
      class='elevation-0'
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-toolbar-title>w3saver</v-toolbar-title> -->
      <img @click='$router.push(`/`)' role='button' src='../../static/w3Logo.svg' style="height: 50%; margin-top: 5px;" />
    </v-toolbar>

    <!-- navigation  -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      hide-overlay
    >

    	<v-list dense class="pt-0">
    	        <v-list-tile v-for="item in items" :key="item.title" href :to='item.href' @click="">
    	          <v-list-tile-action>
    	            <v-icon>{{ item.icon }}</v-icon>
    	          </v-list-tile-action>
    	          <v-list-tile-content>
    	            <v-list-tile-title>{{ item.title  }}</v-list-tile-title>
    	          </v-list-tile-content>
    	        </v-list-tile>
    	</v-list>

    </v-navigation-drawer>
    <v-content>
    <!-- loading bar -->
	<v-progress-linear v-show='loading' style='margin:auto; border-radius: 25px; height: 2px; position: absolute;' color='white' :indeterminate="true"></v-progress-linear>

      <router-view/>

    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      drawerRight: true,
      right: null,
      left: null,
      loading:false,
      items: [
          { title: 'w3saver', icon: 'home', href:'/' },
          { title: 'Contact Us', icon: 'email', href:'/contact' },
          { title:'bug report', icon: 'bug_report', href:'/bug' }
      ],
    }),
    props: {
      source: String
    },
    mounted(){
    	this.$bus.$on(`loading`,r=>{
    		this.loading = r;
    	})
    }
  }
</script>