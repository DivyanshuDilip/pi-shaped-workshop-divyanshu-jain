Core Concept Questions

Q1: Why is Helm important for managing configuration across different environments in a real-world product (e.g., dev, staging, prod)?

Helm enables templating and parameterization of Kubernetes manifests, which makes it easy to deploy the same application across multiple environments with different configurations. For instance, you can maintain a single Helm chart and override values such as image tags, replica counts, or environment-specific variables using different values.yaml files or CLI arguments — greatly reducing duplication and error-prone manual changes.

Q2: How does Helm simplify deployment rollback during a production incident?

Helm maintains a revision history of every installation and upgrade. If a deployment breaks due to a bad image or config during an upgrade, Helm allows you to rollback to a previous stable release using a single command:

helm rollback < release-name > < revision-number >
This makes incident recovery fast, reliable, and minimizes downtime.


Installation & Upgrade Steps:

1. Install Helm (if not already installed)
On Ubuntu or Debian-based systems, you can install Helm using Snap:

sudo snap install helm --classic

2. Package the Helm Chart
helm package .

This creates a .tgz Helm chart archive (e.g., flask-app-0.1.0.tgz).

3. Install the Helm Chart
helm install my-app ./my-app

This deploys the app to your Kubernetes cluster using values from values.yaml. You can verify the deployment and pods with:

 kubectl get deployment

 kubectl get pods

4. Upgrade the Release (Change Replica Count)
To scale the app from 3 to 5 replicas, modify the replicaCount in values.yaml:

kubectl get pods

Then upgrade the deployment with:
helm upgrade my-app-release ./my-app

Verify the updated pods:

kubectl get pods
5. Optional: Rollback (in case of issue)

Helm supports easy rollback:

helm rollback my-app-release 1
Replace 1 with the desired revision number as needed.