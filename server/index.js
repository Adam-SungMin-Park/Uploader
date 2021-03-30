require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const argon2 = require('argon2');
const jsonMiddleware = express.json();
const pg = require('pg');
const app = express();
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized:false
  }
})

app.use(staticMiddleware);
app.use(jsonMiddleware);

app.get('/api/items', (req,res)=>{
  const sql = `
    select "itemName" , "itemPrice", "itemQty"
    from "items"
  `
 db.query(sql)
 .then(result => {
   res.json(result.rows);
 })
 .catch(err =>{return err})

})

app.post('/api/itmes',(req,res)=>{
  const sql =`
    insert into "items" ("itemName", "itemPrice" , "itemImage", "itemQty")
    values ($1, $2, $3, $4)
    returning "itemId"
  `
  const params = [req.body.itemName, req.body.itemPrice, req.body.itemImage, req.body.itemQty]

  db.query(sql,params).then(res => {return res.rows[0].itemId})
  .catch(err => {return err})

})



app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
