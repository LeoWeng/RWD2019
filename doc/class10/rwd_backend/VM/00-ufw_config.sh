#!/bin/bash

sudo ufw enable
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw allow mysql
sudo ufw status
