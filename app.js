require('dotenv').config();
var cors = require('cors')
const express = require('express');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const APP = './app/routes'
// const nodes = ['admin','basic','board','game','todo','user']
const nodes = [ 'user', 'board']
for(const leaf of nodes){
  require(`${APP}/${leaf}.route`)({url:`/api/${leaf}`,app})
}

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
const db = require('./app/models/index')
db.mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log(' 몽고 DB 연결 설정 ')
    /*console.log('db.rul', db.url)
    console.log('db.mongoose', db.mongoose)
    console.log('db.user.db', db.user.db)*/
  })
  .catch(err => { console.log(' 몽고DB와 연결 실패', err)
        process.exit();
});
app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

/*
app.post("/api/basic/calc", (req, res)=>{
  const {num1, num2, opcode} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자 1 : ${num1}`)
  console.log(`연산자 : ${opcode}`)
  console.log(`숫자 2 : ${num2}`)
  const json = computeCalc(req.body)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)

})        
*/