const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');
const fs = require('fs')
const download = require('download');

// for all formets
router.get('/info/:id',(req,res,next)=>{

	const url = `https://www.youtube.com/watch?v=${req.params.id}`
	ytdl.getInfo(url, (err,info)=>{
		info?res.send(info):res.send('error');
	})
})

// for only audio

// download('https://r4---sn-gxap5ojx-h55e.googlevideo.com/videoplayback?clen=3543656&pcm2cms=yes&mm=31&mn=sn-gxap5ojx-h55e&id=o-AAUC1Ws06_wDrg_k0vWwJUYPw51l30mUdw4y_lNmFLjp&mt=1510949145&mv=m&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpcm2%2Cpcm2cms%2Cpl%2Crequiressl%2Csource%2Cexpire&ms=au&ip=139.59.17.247&ei=jUEPWrupA5K2oAOH17qIBw&itag=140&pl=18&source=youtube&expire=1510970861&ipbits=0&dur=223.074&lmt=1507658537869158&gir=yes&mime=audio%2Fmp4&key=yt6&requiressl=yes&pcm2=yes&initcwndbps=197500&ratebypass=yes&signature=0358C5CECCEECA0FC4633B56C1511FDD0F49C6F7.BA207C07D15ABB143DB5AD3EB869EF0D1A186F0E&cms_redirect=yes&ipbypass=yes')
// .pipe(fs.createWriteStream('images/foo.m4a'));
router.get('/audio/:id',async(req,res,next)=>{
	const url = `https://www.youtube.com/watch?v=${req.params.id}`
	ytdl.getInfo(url, (err,info)=>{
		if(info){
			const audio =  info.formats.filter( d=>{
				 return d.container === 'm4a'
			});

			// download('https://r4---sn-gxap5ojx-h55e.googlevideo.com/videoplayback?clen=3543656&pcm2cms=yes&mm=31&mn=sn-gxap5ojx-h55e&id=o-AAUC1Ws06_wDrg_k0vWwJUYPw51l30mUdw4y_lNmFLjp&mt=1510949145&mv=m&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpcm2%2Cpcm2cms%2Cpl%2Crequiressl%2Csource%2Cexpire&ms=au&ip=139.59.17.247&ei=jUEPWrupA5K2oAOH17qIBw&itag=140&pl=18&source=youtube&expire=1510970861&ipbits=0&dur=223.074&lmt=1507658537869158&gir=yes&mime=audio%2Fmp4&key=yt6&requiressl=yes&pcm2=yes&initcwndbps=197500&ratebypass=yes&signature=0358C5CECCEECA0FC4633B56C1511FDD0F49C6F7.BA207C07D15ABB143DB5AD3EB869EF0D1A186F0E&cms_redirect=yes&ipbypass=yes')
			// .pipe(fs.createWriteStream('images/foo.m4a'));

			 download(audio[0].url).then((data,err) => {
			 	if(err){
			 		console.log(err);
			 	}
			 	console.log(data);
			     fs.writeFileSync('tempx/'+info.title.replace(/[^a-zA-Z ]/g, "")+'.m4a', data);
					res.download('tempx/'+info.title.replace(/[^a-zA-Z ]/g, "")+'.m4a')
			 });

		}else{
			res.send('error')
		}


	})
})


module.exports = router;