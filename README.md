# express-sequelize-postgres
crud api sample express with sequelize and postgressql

``run terminal``

``sudo postgress``
lalu create database 'sequelize'

update config/database.js sesuaikan nama database dan passwordnya

instant 
gunakan
``git clone``

manual install
``npm install bcrypt body-parser cors express fs-extra jsonwebtoken multer pg-hstore sequelize``
``npm install -D nodemon``

untuk create table, cukup jalankan node sequelize.js
maka table akan ke create

test case ;
``localhost:3004/users``
``localhost:3004/users:id``

//dibedakan untuk auth
``localhost:3004/register``
``localhost:3004/login``

perhatikan di file routes/UserRt.js sesuaikan methodenya post,get dll untuk test di postman
