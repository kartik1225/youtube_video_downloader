<template>
	<div class='blue-grey lighten-1' style="height: 100%; width:100%;">
		<!-- loading bar -->
		<title>lol</title>
		<v-progress-linear v-show='loading' style='margin:auto; border-radius: 25px; height: 2px; position: absolute;' color='white' :indeterminate="true"></v-progress-linear>

		<v-slide-x-transition>
		<!-- whole container -->
		<div v-show='!loading && !serverError'>
		<!-- sidecol -->
		<div class="sidecol white elevation-2">
			<img style='margin-top:-10%' :src='thumb' width="100%" />

			<v-card style='margin-top:-11%' class='elevation-0 white'>
				<v-btn
              absolute
              dark
              fab
              top
              right
              color="red"
              small
              @click='gotoyt'
            >
              <v-icon>play_arrow</v-icon>
            </v-btn>
				<v-container >
				<p class="subheading">{{vData.title}}</p>
				</v-container>

				<v-divider></v-divider>
				<!-- buttuns -->
				<v-layout row wrap justify-space-around class='grey lighten-4'>
					<v-btn flat class='black--text' @click='coppyLink("Thank you so much for your support <3")' >donate &nbsp<v-icon small>account_balance_wallet</v-icon></v-btn>
					<v-btn flat @click='coppyLink("link has been coppied to clipbord")' >Share link &nbsp<v-icon small>share</v-icon></v-btn>
				</v-layout>

				<!-- snakbar -->
				<v-snackbar
				      :timeout="5000"
				      bottom
				      right
				      v-model="coppySnak"
				    >
				      {{snacText}}
				      <v-btn flat color="amber" @click.native="coppySnak = false">Close</v-btn>
				</v-snackbar>

				<v-divider></v-divider> 

				</v-card>
		</div>

		<!-- main content -->
		<div class="content" >

			<div style="width: 100%;">
				<br>
					<searchBar style='margin-top: 30px;'></searchBar>
				<br>

				<v-container>
				  
					<v-layout row wrap justify-space-around>

						<!-- mp4 -->
						<v-flex xs12 sm6 md5 style='padding: 20px 10px  10px  10px ;'>
							<!-- title info -->
							<v-card class='amber'>
								<v-container grid-list-md>

										<v-layout justify-center>
										<v-icon style='font-size: 15px;'>video_label</v-icon> 
										<span style="margin-bottom: auto;margin-top: auto; margin-left:4px;"><strong>video</strong></span>
										</v-layout>

								</v-container>
							</v-card>

							<!-- download links -->
							<v-card class='blue-grey darken-3'>
								<v-container>
										<h3 class="text-xs-center white--text">Videos in <br> <span class="display-4">mp4</span></h3>
								</v-container>
								<v-divider dark></v-divider>
								<v-card-actions>
									<v-layout wrap justify-space-around>
										<!-- mp4 loop -->
										<template v-for='link in links.mp4'>
											<v-btn light flat class='amber--text' @click='download(link)'>{{link.resolution}}</v-btn>
										</template>
									</v-layout>
								</v-card-actions>
							</v-card>
						</v-flex>

						<!-- mp3 -->
						<v-flex xs12 sm6 md5  style='padding: 20px 10px  10px  10px ;'>
							<v-card class='amber'>
								<v-container grid-list-md>

										<v-layout justify-center>
										<v-icon style='font-size: 15px;'>music_note</v-icon>
										<span style="margin-bottom: auto;margin-top: auto;"><strong>audio only</strong> <i> download music video as song</i></span>
										</v-layout>

								</v-container>
							</v-card>

							<!-- download link of mp3 -->
							<v-card class='blue-grey darken-3'>
								<v-container>
										<h3 class="text-xs-center white--text">audio in <br> <span class="display-4">mp3</span></h3>
								</v-container>
								<v-divider dark></v-divider>
								<v-card-actions>
									<v-layout wrap justify-space-around>

										<v-btn light flat class='amber--text' @click='getaudio'>audio</v-btn>

									</v-layout>
								</v-card-actions>
							</v-card>
						</v-flex>

						<!-- 3gp -->
						<v-flex xs12 sm6 md5 style='padding: 20px 10px  10px  10px ;'>

								<v-card class='amber'>
									<v-container grid-list-md>

											<v-layout justify-center>
											<v-icon style='font-size: 15px;'>slow_motion_video</v-icon>
											<span style="margin-bottom: auto;margin-top: auto; margin-left:4px;"> <strong>low quality</strong> video</span>
											</v-layout>

									</v-container>
								</v-card>

								<!-- download links of 3gp -->
								<v-card class='blue-grey darken-3'>
									<v-container>
											<h3 class="text-xs-center white--text">Videos in <br> <span class="display-4">3gp</span></h3>
									</v-container>
									<v-divider></v-divider>
									<v-card-actions>
										<v-layout wrap justify-space-around>
											<template v-for='link in links.threeGp'>
												<v-btn light flat class='amber--text' @click='download(link)'>{{link.resolution}}</v-btn>
											</template>
										</v-layout>
									</v-card-actions>
								</v-card>
						</v-flex>


						<!-- mp4 muted -->
						<v-flex xs12 sm6 md5 style='padding: 20px 10px  10px  10px ;'>
								<v-card class='amber'>
									<v-container grid-list-md>

											<v-layout justify-center>
											<v-icon style='font-size: 15px;'>volume_off</v-icon>
											<span style="margin-bottom: auto;margin-top: auto;"><strong>video</strong> only</span>
											</v-layout>

									</v-container>
								</v-card>

								<!-- download links mp4 muted -->
								<v-card class='blue-grey darken-3'>
								<v-container>
										<h3 class="text-xs-center white--text">Only videos in <br> <span class="display-4">mp4</span></h3>
								</v-container>
								<v-divider></v-divider>
								<v-card-actions>
									<v-layout wrap justify-space-around>
										<template v-for='link in links.onlyVideo'>
											<a download="true" style="text-decoration:none" :href='link.url'><v-btn light flat class='amber--text'>{{link.resolution}}</v-btn></a>
										</template>
									</v-layout>
								</v-card-actions>
								</v-card>
						</v-flex>



					</v-layout>
				</v-container>
			</div>

		</div>	

		</div>
	</v-slide-x-transition>

	<!-- shareing and bug report -->
	<v-dialog v-model='feedback' max-width='400px'>
		<v-card class='grey lighten-2'>
			<div style="height:10px; width: 100%:" class="gradient"></div>
			<v-container>
			  <p class="title ">Did it worked?</p>
			  <p class="subheading">if yes? then share this website with your friends.</p>

			  </v-layout>

			  <v-layout justify-space-around>
				  <div v-ripple>
				  	<a :href="`whatsapp://send?text=hey%20i%20found%20this%20awosome%20website%20%2C%20*w3saver.com*%20from%20here%20you%20can%20download%20any%20youtube%20videos%20and%20audio%20in%20mp3%20for%20free.%20check%20this%20one%20out%20!`"><img style="width: 50px;" src='../../static/whatsapp.png'/></a>
				  </div>

				  <div v-ripple role='button'>
				  	<a href="https://www.facebook.com/sharer/sharer.php?u=https://w3saver.com/" target="_blank">
				 	 <img style="width: 55px;" src='../../static/fb.png'/></a>
				  </div>
				  

				  <div v-ripple role='button'>
				  	<a class="twitter-share-button"
					  href="https://twitter.com/intent/tweet?text=hey%20i%20found%20this%20awosome%20website%20%2C%20w3saver.com%20from%20here%20you%20can%20download%20any%20youtube%20videos%20and%20audio%20in%20mp3%20for%20free.%20check%20this%20one%20out%20!"
					  data-size="large">
				  	  <img style="width: 45px;margin-top: 5px;" src='../../static/tw.png'/>
					</a>
				  </div>
			  </v-layout>

			</v-container>
			  <v-divider></v-divider>
			  <v-layout justify-space-between>
				  <v-btn flat class='black--text' @click='coppyLink("Thank you so much for your support <3")' >donate &nbsp<v-icon small>account_balance_wallet</v-icon></v-btn>
			  <v-btn flat class='red--text' @click='$router.push(`/bug`)' >report bug</v-btn>
				  <v-btn flat @click='feedback = false'>close</v-btn>
			  </v-layout>
		</v-card>
	</v-dialog>

	<!-- mp3 being convertrd -->
	<!-- for server errors -->
	<v-dialog v-model="audioProcess" max-width="400px">
	  <v-card>
	  	<v-container class='amber'>
	  		<p class="title" style="margin: auto;">Please wait</p>
	  	</v-container>
	  	  <v-progress-linear  style='margin:auto; border-radius: 25px; height: 2px; position: absolute;' :indeterminate="true"></v-progress-linear>
	  	<v-container class='grey lighten-4'>
	  	  <p class="subheading" style="margin: auto;">Video is being converted to mp3...</p>

	  	  <v-layout row wrap >
	  	    <v-icon style='font-size: 40px; padding: 10px;'>movie</v-icon>
	  	    <v-icon style='font-size: 40px; padding: 10px;'>arrow_forward</v-icon>
	  	    <v-icon style='font-size: 40px; padding: 10px;'>audiotrack</v-icon>
	  	  </v-layout>

	  	  <p class="subheading grey--text body-1" style="margin: auto;">it will may take about 20 sec to 1 min depending on video length.</p>
	  	</v-container>
	  </v-card>
	</v-dialog>

	<!-- for server errors -->
	<v-dialog v-model="serverError" max-width="400px">
	  <v-card>
	  		<v-container class='red'>
	  		<p class="title white--text" style="margin:auto;">Server Error</p>
	  		</v-container>
	  	<v-container>

		  		<li class='subheading'>try to reload the page</li>
		  		<li class='subheading'>try search video through our website <a @click='$router.push(`/`)'>search</a></li>
		  	<br>
	  		<p class="body">if this did not work then please give us bug report.</p>
	  	</v-container>
	  		<v-divider></v-divider>
	  		<v-layout>
	  		<v-btn block flat class='red--text' @click='$router.push(`/bug`)'>report a bug</v-btn>
	  		<v-btn block flat @click='$router.push(`/`)'>go to homepage</v-btn>
		  	</v-layout>
	  </v-card>
	</v-dialog>


	</div>
</template>

<script>

import axios from 'axios'
import searchBar from './searchBar.vue'

// from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

	export default{
		components:{
			searchBar
		},
		data(){
			return{
				md:false,
				vData:'',
				links:{
					mp4:'',
					threeGp:'',
					m4a:'',
					onlyVideo:''
				},
				lg:false,
				size:{
					x:0,
					y:0
				},
				q:'',
				queryData:'',
				qshow:false,
				loading:true,
				content:false,
				error:false,
				thumb:'',
				coppySnak:false,
				snacText:'',
				feedback:false,
				serverError:false,
				audioProcess:false,
				socket:null
			}
		},
		sockets:{
		    connect: function(){
		      console.log('socket connected')
		    },
		    socketID: function(id){
		    	this.socket = id;
		    	console.log('socketId',id);
		    },
		    download_started: function(val){
		    	this.audioProcess = false;
			    setTimeout(()=>{
			    	this.feedback = true;
			    },1000)
		    }
		},
		watch:{
			q(i){
				if(i.length > 0){
					this.qshow = true;
					this.query();
				}else{
					this.qshow = false
				}
			},
			links(){
				this.content = true;
			},
			'$route.params.id':function(i){
				console.log('loading',this.loading)
				i !== 'undefined'?this.fetchData(i):(alert('video not found try to be more specific'),this.$router.go(-1))
			},
			'document.readyState'(i){
				console.log('rs',i)
			}
		},
		mounted(){
		     this.onResize();
		     const i = this.$route.params.id;
		     i !== 'undefined'?this.fetchData(i):(alert('video not found try to be more specific'),this.$router.go(-1))
			 this.fetchData(this.$route.params.id);
		},
		methods:{
			onResize(){
				this.size = {x:window.innerWidth , y:window.innerHeight}
				const br = this.$vuetify.breakpoint;
					this.md = br.mdOnly;
					this.lg = br.lgOnly;
					this.sm = br.smOnly;
			},
			query(){
				const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.q}&key=AIzaSyBIdXsWiD1vGMXap3APNptA8KP-f-pZw3g`;

				axios.get(url).then(r=>{
					this.queryData = r.data.items;
				}).catch(e=>{
					console.log(e);
					this.serverError = true;
				})
			},
			onenter(){
				const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.q}&key=AIzaSyBIdXsWiD1vGMXap3APNptA8KP-f-pZw3g`;

				axios.get(url).then(r=>{
					this.$router.push('/get/'+r.data.items[0].id.videoId)
				}).catch(e=>{
					console.log(e);
					this.serverError = true;
				})
			},
			coppyLink(text){

				if(text === 'link has been coppied to clipbord'){

					  copyToClipboard(window.location)


					this.snacText = text;
					this.coppySnak = true;
				}else{
						this.snacText = text;
						this.coppySnak = true;
					setTimeout(()=>{
						this.coppySnak = true;
						window.location = 'https://www.paypal.me/kartikgarasia'
					},3000)
				}
			},
			fetchData(i){
				this.qshow = false;
				this.content = false;
				this.loading = true;
				this.$bus.$emit(`loading`,true)
				axios.get(`${this.$store.state.server}get/info/${i}`).then(r=>{

					console.log(r.data);
					this.vData = r.data;
					this.content = true;

				 	document.title =  this.vData.title + ' - w3saver' ;
					this.thumb = this.vData.thumbnail_url.replace("default","hqdefault")

					// getting colors from vibrantjs

					if(r.data !== 'error'){

				// mp4 videos
				const mp4 = r.data.formats.filter(d=>{
					const dlink = d.url+'&title='+r.data.title;
					return d.container === 'mp4' && d.audioEncoding !== null && d.resolution !== null;
				})
					this.links.mp4 = mp4;
				
				// 3gp videos
				const threeGp = r.data.formats.filter(d=>{
					return d.container === '3gp'
				}) 
					this.links.threeGp = threeGp;

				// m4a audio
				const m4a = r.data.formats.filter(d=>{
					return d.container === 'm4a'
				})
				this.links.m4a = m4a;

				// only videos
				const onlyVideo = r.data.formats.filter(d=>{
					return d.container === 'mp4' && d.audioEncoding === null && d.resolution !== null;
				})

				this.links.onlyVideo = onlyVideo.slice(0, 3);

				this.loading = false;
				this.$bus.$emit(`loading`,false)

				}else{
					this.$router.push('/error/'+this.$route.params.id);
				}

				}).catch(e=>{
					console.log(e);
					this.serverError = true;
					this.loading = false;
					this.$bus.$emit(`loading`,false)
				})
			},
			feedBox(){
				setTimeout(()=>{
					this.feedback = true
				},3000)
			},
			download(i){
				this.feedBox();
				console.log('download',i)
				window.location = i.url + '&title=' + this.vData.title;
			},
			gotoyt(){
				window.location = this.vData.video_url;
			},
			getaudio(){

				this.audioProcess = true;

				window.location = `${this.$store.state.server}get/audio/${this.$route.params.id}/${this.socket}`

			}
		}
	}	
</script>

<style scoped>

@media only screen and (min-width: 860px){
.sidecol{
    position: fixed;
    width:30%;
    height: 100%;
    overflow: auto
}

.content{
	position: absolute;
	width: 70%;
	right: 0;
}

@media only screen and (min-width: 1280px){
	.sidecol {
	    position: fixed;
	    width:24%;
	    height: 100%;
	    overflow: auto;
	}

	.content{
		position: absolute;
		width: calc(100% - 24%);
		right: 0;
	}
}

.sidecol {

}

}

.gradient{
	background: #F7971E;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #FFD200, #F7971E);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #FFD200, #F7971E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.gradient-bg{
	background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

	
</style>