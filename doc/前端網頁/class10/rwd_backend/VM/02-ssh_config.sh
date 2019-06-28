#!/bin/bash

sudo mkdir -p /var/run/sshd
sudo chmod -rx /var/run/sshd
sudo ssh-keygen -A
sudo cp -p /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
