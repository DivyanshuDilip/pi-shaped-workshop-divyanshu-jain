Core Concept Questions
1. How would you expose an internal microservice (e.g., user-auth) differently than a public-facing frontend in a Kubernetes-based product?

Internal microservices like user-auth are typically exposed using ClusterIP services, making them accessible only inside the cluster to other services or pods, enhancing security and isolation.
Public-facing frontends are exposed using NodePort, LoadBalancer services, or Ingress to allow external client access via public IPs or domain names.
2. Why might a product use Ingress instead of directly exposing each microservice via LoadBalancer?

Ingress allows managing access to multiple services via a single external IP and hostname, with path- or host-based routing rules.
It reduces the number of external IPs needed, lowering costs and simplifying DNS management.
Ingress can also provide SSL termination, authentication, and centralized traffic control, which individual LoadBalancers cannot efficiently provide.
LoadBalancer services are costly and sometimes unavailable on local clusters like Minikube, making Ingress the preferred choice for flexible traffic routing.


How to Test:

Apply Deployment:
kubectl apply -f deployment.yaml

Apply Services:
kubectl apply -f nodeportservice.yaml
kubectl apply -f clusteripservice.yaml

Apply Ingress:
kubectl apply -f ingress.yaml

Access app using:
NodePort URL: http:// minikube-ip :30081/