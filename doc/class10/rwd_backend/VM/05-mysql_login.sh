#!/bin/bash

sudo mysql -u root mysql

#executing following commands:
#SELECT user,authentication_string,plugin,host FROM mysql.user;
#UPDATE user SET plugin='mysql_native_password' WHERE User='root';
#FLUSH PRIVILEGES;
#SELECT user,authentication_string,plugin,host FROM mysql.user;
