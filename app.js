const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const mongoose = require('mongoose');
const petRoutes = require('./routers/petrouter');

const app = express();
mongoose.connect('<< Mongodb URL >>')
                .then( console.log("เชื่อมต่อฐานข้อมูล สำเร็จ แล้วนะจ๊ะ ++ ++")   )

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pets', petRoutes); // ใช้เส้นทางสำหรับสัตว์เลี้ยง

app.set('etag', false);


module.exports = app;
