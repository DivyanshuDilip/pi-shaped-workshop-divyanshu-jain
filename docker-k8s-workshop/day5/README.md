Core Concept Questions
Q1: Why are liveness and readiness probes critical in keeping a product’s user experience stable and reliable? Liveness and readiness probes help Kubernetes determine the health and availability of application pods:

Liveness probes detect if an application is stuck or deadlocked and need to be restarted to recover.
Readiness probes signal whether a pod is ready to serve traffic, preventing requests from being routed to pods that are still initializing or temporarily unhealthy.
Together, these probes ensure that users are served by healthy pods only, minimizing downtime and failed requests, which stabilizes and improves the overall user experience.

Q2: How does HPA help in handling flash sales, seasonal load spikes, or traffic surges in real-world applications like an e-commerce platform?

Horizontal Pod Autoscaler (HPA) automatically scales the number of pod replicas based on observed CPU/memory usage or custom metrics:

During flash sales or seasonal spikes, HPA quickly increases pod replicas to handle increased traffic.

It scales down when demand drops, optimizing resource usage and cost.

This elasticity ensures the platform remains performant and responsive under variable load without manual intervention, providing a seamless shopping experience.