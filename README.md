# mean
MySql  Express Angular 2 Node JS  [MEAN] Example


# DataBase Table Structure [DataBase Name is todo]

CREATE TABLE todos (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) binary DEFAULT NULL,
  isDone tinyint(1) DEFAULT NULL,
  createdDate datetime DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 5461
CHARACTER SET utf8
COLLATE utf8_bin;


git clone https://github.com/AnilTripathi/mean.git
cd mean
# Install dependencies for Node JS
npm install

# Install dependencies for Angular 2 Client 
cd client
npm install


# for start server open two command windos one for Node Server and One For Angular 2 Client
1. open command windows for start Node Server  (with in mean folder)
   node server 
 
2. open command windows for Angular 2 Client (within mean/client folder)
   npm run start

# Client url: http://localhost:3200

