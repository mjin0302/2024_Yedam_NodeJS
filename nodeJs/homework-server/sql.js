// sql.js

const customerAllList = 
`SELECT  id
      ,  name
      ,  email
      ,  phone
      ,  address
FROM     customers
ORDER BY id`;

const customerSelect = 
`
SELECT  id
      , name
      , email
      , phone
      , address
FROM    customers
WHERE   id`;

const customerInsert = 
`INSERT INTO customers
SET ?`;

const customerUpdate = 
`UPDATE customers
SET     ?
WHERE   id = ?`;

const customerDelete = 
`DELETE FROM customers
WHERE id = ?`;

module.exports = {
   customerAllList,
   customerSelect,
   customerInsert,
   customerUpdate,
   customerDelete
}