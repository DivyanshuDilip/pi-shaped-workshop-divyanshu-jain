1. Why do we set requests and limits for CPU/memory in a production-grade product?

Setting resource requests and limits helps Kubernetes efficiently schedule pods and ensures that containers get the resources they need without affecting others. Requests guarantee minimum resources, while limits prevent a container from consuming excessive resources, maintaining cluster stability and performance.

2. When would a product team apply node affinity in Kubernetes?

Node affinity is used when pods need to be scheduled on specific nodes that meet certain criteria, like having SSDs, GPUs, or geographic constraints. It helps optimize resource usage, improve performance, and meet compliance or architectural requirements.


How to Run on Kubernetes (Minikube)
1. Start your minikube if not running:
minikube start

2. Apply the deployment manifest:
kubectl apply -f deployment.yaml

3. Verify the pods are running:
kubectl get pods -o wide

4. Apply the service manifest:
kubectl apply -f service.yaml

5. Check service details:
kubectl get service image-service

6. Get Minikube IP:
minikube ip

7. Open your browser with the following URL:

http://<minikube-ip>:<node-port>


