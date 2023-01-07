# Docker Docs
Docker

When we install docker we technically install a linux virtual machine and whenever docker desktop is running linux virtual machine is active.

## Container
---
In any system there is kernel that has the direct control of the hardware.
Container is a set of process that are running inside our system that can isolate the program from the normal environment.

Each container has three communication channels attached to it.
- STDIN
- STDOUT
- STDERR

1. STDIN - It takes the input from the terminal.
2. STDOUT - It gives the output to the terminal.
3. STDERR - This channel is for errors.

`One thing about container id is that you don't need to copy the entire sha value to refer to a container, you can just copy an arbitary numbers of characters from start and that will be unique enough for docker recognize what container you are refering to.`

## Image
---
Image is a file system snapshot. Image has a very specific start up command.

## Commands
---
### Docker run [IMAGE]
---
Docker run command starts up the docker client which is reponsible for taking commands from us then forwarding it to docker server.
Docker server checks the we are trying to start a image which either exists or doesn't.
If exists, docker just use the image create the instance of a container.
If doesn't exist, docker downloads the image from docker hub.

After a container is created image is taken inside of container then start up command is executed.

Example Command --
```docker run hello-world```
*hello-world is a image that is available in docker hub.*

#### Docker run [IMAGE] [Overriding CMD TO RUN]
When we create a new container for the image and pass the alternate command to it. The alternate command is run in the container image. If the command doesn't exist in the image it will throw error.

Example cmd
```docker run busybox echo hey there```

#### Docker run -it [IMAGE] sh
Same as explained in exec command it will just become the primary process.


### Docker ps
---
Gives to details of all the containers that were running and running right now.
```Docker ps -all```

### Docker create [IMAGE]
---
Docker create creates a container.

### Docker start [IMAGE ID]
---
You get the image id from docker create or from docker ps.
By default - docker start doesn't show output from the container.
To get the output use ```docker start -a [IMAGE ID]```

### Docker system prune
---
Delete all the images and the container that docker created.

### Docker logs [IMAGE ID]
---
Can be used to get the logs(output) that was printed when the terminal was running.

### Docker kill [CONTAINER]
---
Docker kill command issues is a command which instantly terminates a container.

### Docker stop [CONTAINER]
---
Docker stop command issues a SIGTERM command which gives a container
10 seconds to shut down but if it exceeds the time limit the docker issue's docker kill container command.

### Docker exec -it [CONTAINER ID] [COMMAND]
---
Execute a additional command inside a container.
Without -it flag you will diectly get kicked to cli without chance to type something in.

Here -it flag stands for -i and -t flag.
`In docker we can merge two or more flags to one flag.`
By that logic -it flag is created. 
- -i is for input communication channel (check the container communication channels). 
- -t flag is for autocomplete and decorate the output text.

### Docker exec -it [CONTAINER ID]
---

To be able to run any command inside a container like you would in any normal system. It can get bothersome to write docker exec -it again n again.
*Just remember it's a linux system.*

To exit you can try `exit` command or `ctrl + d`.

*If you run the same command in two different terminal it will create two different instances.*

sh means shell, it will start shell.

```docker exec -it [container id] sh```

### Docker build [dir]
---
Builds the image using dockerfile.

### Docker build -t [user_id]/[container_name]:[version] [dir]
---
Here t stands for tag. What's this command does is that it simply assigns the container id to tag name.
Here tag name is codex4747/docker:latest.
It is just a naming convention to right container name like this.
Then if we want to run it -
    docker run codex4747/docker:latest

This process is also called tagging the image.

### Dokcer run -p [Port_onMachine]:[Port_onContainer] [ContainerID]
Docker command for port forwarding to use in node js

## How to create a image
---
- Create a folder for image and inside that you can create a `Dockerfile`.
- In the `Dockerfile` put the commands as shown in example folder redis-image
- Then inside the terminal do `docker build .`

## Dockerfile
---
Each command starts of with a instruction like RUN, FROM, CMD.

`FROM` command specifies the base image. For example - It's similar to installing os in a empty system.

## Docker Build Process
---

Docker first installs a base image (alpine for example). Then docker
creates a container from the image and runs whatever command is there in dockerfile and then delete's the container.
Docker does this for every instruction.
Docker caches images after every instruction and stores in our system, so that when a simple change is made to dockerfile it can rebuild the entire container as fast as possible.


## Manually Building a Docker image
---
What is done above using dockerfile can also done without dockerfile.
But this is not intended for production uses and is only for education purpose.

Here are the commands -
- docker run -it alpine sh
- docker ps                         // to get container id
- docker commit -c "CMD 'redis-server'" [ContainerID]           // not working


## Host a node js app on docker