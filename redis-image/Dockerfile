# Use an existing docker image as a base
# alpine in docker world means as small and compact as possible
# nearly all the images in docker world will have the alpine version
# of their image
FROM alpine

# Download and install a dependency
# apk is not the android apk but rather a package manager that comes with alpine
RUN apk add --update redis

# Just a second dependency gcc is not important
RUN apk add --update gcc

# Tell the image what to when it starts as a container
CMD [ "redis-server" ]