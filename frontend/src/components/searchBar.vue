<template>
	<div>
		<v-layout row justify-center>
		  <v-flex xs11 sm8 md6>
		    <div class="searchBar">
		      <v-layout row wrap>
		      <v-text-field v-model="query" solo-inverted  label="search video tile or paste url" append-icon='search'></v-text-field>
		      </v-layout>

		      <v-list v-show='qbox' class='elevation-1'>
                <v-list-tile v-for='data in queryData' @click="($router.push('/get/'+data.id.videoId),qbox=false)">
                  <v-list-tile-content>
                    <v-list-tile-title v-text="data.snippet.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
		      </v-list>

		    </div>
		  </v-flex>
		</v-layout>
	</div>
</template>

<script>
	import config from '../config.js'
	import axios from 'axios'
	export default{
		data(){
			return{
				query:'',
				qbox:false,
				queryData:[]
			}
		},
		watch:{
			query(i){
				const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${i}&key=${config.youtube_api}`;

				this.qbox = i !== '';

				axios.get(url).then(r=>{
					const results = r.data.items.filter(d=> d.id.kind === 'youtube#video');
					this.queryData = results;
				}).catch(e=>{
					console.log(e)
				})
			}
		},
		methods:{
		}
	}
	
</script>

<style>
  .searchBar .input-group--solo-inverted{
    background: #FFC400 !important;
  }
  .searchBar .input-group--focused{
    background: #fff !important;
  }
  .searchBar .input-group--focused input{
    color: black !important;
  }

	
</style>