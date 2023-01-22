# Kubernetes (K8s)
Kubernetes looks for the image to use according to the config file. It first checks the daemon server for the image, 
If it doesn't finds the image there then it will check the docker hub and download the image from there.

Kubernetes has pods which wraps a container. 
In order to manage these pods, kubernetes creates a deployment that is incharge of running the pods and making sure the container never crashes.

Kubernetes creates a service (here service is not something like microservice, program, server) etc. Service helps connect the multiple
container.

## Kubernetes Cluster
A collections of nodes and a master to manage them.

## Node
A virtual machine that will run our contatiners.

## Pod
More or less a running container. Technically, a pod can run multiple
containers.

## Deployment
Monitors a set of pods, make sure they are running and restart them if they crash. 
Deployment can automatically recreate a pod if it's deleted accidently.

## Service
Provides an easy-to-remember URL to access a running container. Connects different pods or containers.

## Config file
Tells about kubernetes about the different, pods and services (referred to as 'Objects') that we want to create.

It is written in YAML syntax.

Objects can be created with creating config files. But if you do that you won't able to tell what objects you are running. 
It serves as a documentation. So you should always create config file.

Indent space should always be 2.
```
# A sample config file
apiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:       # It's an array that's what in - name means just
  down
    - name: posts       # it can have any name no need to have same name as pod
      image: codex/posts        # since there is no version specified it's gonna assume latest, it will first check docker hub first when latest
```

## Commands
Some commands that can be used for kubernetes.

*Every kubernetes command starts kubectl which can be little annoying to type. So you can setup a custom alias on your system to refer to kubectl.*

### kubectl version
shows the version of kubernetes version we are using.

### To get list of all pods running inside kubectl
```kubectl get pods```

### kubectl exec -it [pod_name] [cmd]
Execute the given command in running pod.

### kubectl get pods
Gives information about different pods.

### kubectl logs [pod_name]
Shows logs about pod

### kubectl delete pod [pod_name]
Delete's a pod.

### kubectl describe pod [pod_name]
describes a pod.

### kubectl apply -f [file_name]
Create a object of config file
Open the folder with config.yaml file and then run

### kubectl get deployments
Get Deployments in the 

### kubectl rollout restart deployment [depl_name]
It will update the deployment with latest image on docker hub. This image could be ours or third party image.

### kubectl get services
To show all the services

### kubectl describe service posts-srv
Show detailed information about the services

## Updating the image by deployment
When small changes are made to config.yaml file it will not necessarily
recreate the deployment, it can also update the deployment as well.

## Types of services
- Cluster IP - Sets up an easy-to-remember. URL to access a pod. Only exposes pods in cluster.
- Node Port - Makes a pod accessible from outside the cluster. Usually only used for dev purposes.
- Load Balancer - Makes a pod accessible from outside the cluster. This is the right way to exposes a pod to the outside world.
- External Name - Redirects an in-cluster request to CNAME url.

## Cluster IP
The goal of cluster IP is to expose the pod IP to other pods in a other cluster.

## To reach out to any service
Just use the name of any service instead of localhost in the url.
http://posts-ip-srv:4000.

## Docker push [Image Name]
Push image to docker hub.

## Load Balancer
Tells Kubernetes to reach out to its provider and provision a load balancer. Gets traffic into a single pod.

## Ingress Nginx
A pod with a set of routing rules to distribute traffic to other services.

Ingress doesn't understand methods of a request (get, post) etc.
So to make sure routing works in ingress try to use paths that are just different by request method.

Ingress doesn't support query parameters in the url

## Overriding system network driver
With kubernetes we are not limited to hosting single application, we can host tons of different infrastructure inside a single kubernetes cluster
and ingess-nginx is setup assuming that you might be hosting at different domains.
You can check the host in *ingress-srv.yaml* file.
But in local development environment we need to trick our machine into thinking that the provided domain in ingress file is available.

You need to make change to host in your system at -
```C:\Windows\System32\drivers\etc\hosts```

*Here hosts is the file you need to make change at.*

## Skaffold
If we make any changes to codebase then we need go through the entire process of creating the image, depl etc again which is tiresome. 
To solve that problem skaffold is a command line tool that can be used to automates this tasks.
Skaffold can auto update file in the pod, but from pod your application needs to 
restart itself on detecting a new file. If it's not using something like
create-react-app or nodemon that might be difficult.

`Sometimes skaffold is unable to detect changes in file`.

## Skaffold commands
Some commands that can be used with skaffold.

### skaffold dev
Use this command to start the config from skaffold.yaml file and also to start the skaffold for any project.