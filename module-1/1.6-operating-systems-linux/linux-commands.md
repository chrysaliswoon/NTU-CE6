# Create Container
docker run -d ubuntu:22.04 sleep infinity
docker ps
docker exec -it <container_id> bash
<user>@<hostname>:<currentDir>#

# Commands

- whoami: logged in user
- pwd: present working directory
- ls: listing of files in the directory
- ls -lah: listing, all, human readable
- cd <dir>: change directory
- echo <string> > <filename>
- cat <filename>: show contents of file
- which <command>: shows where the command is stored
- mkdir <dirname>: creates a directory
- mv <src><dest>
- cp <src><dest>
