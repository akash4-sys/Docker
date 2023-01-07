# node alpine version
FROM node:alpine

# The path where this project will be copied
# If it does not exist, it will be created
WORKDIR /usr/app

# Copy current directory to container
# First ./ is for this directory in which docker folder resides
# Second is for where you want to copy inside container
# @ COPY ./ ./

# remove this copy line if you are keeping orange copy line
# every time we make changes to the project we'll need to rebuild
# docker the image, that means install all dependencies again n again
# to avoid that we'll first copy package.json then do npm install
# then copy again, that is if you don't make changes to package.json
COPY ./package.json ./

# Install dependencies
RUN npm install

# then copy the entire project
COPY ./ ./

CMD ["npm", "start"]


# run by docker run -p 80:8080 codex/nodeapp