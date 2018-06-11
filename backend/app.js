// require dependences
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// require routes
const links = require('./routers/links');

// middle whers

app.use(cors());
app.use(morgan('dev'));


// routers
app.use('/get',links);


// 404 handeling
app.use((req,res,next)=>{
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//error handeling from api
app.use((err,req,res,next)=>{
	const error = app.get('env') === 'development'?err:{};
	const status = err.status || 500;

	res.status(status).json({
		error:{
			message:error.message
		}
	})

	console.log(error);
})

// post handeling
const port = 3000;

app.listen(port,()=>{
	console.log(' w3 is running')
});