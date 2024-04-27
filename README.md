**PROJECT SCOPE**
You need to create an application which should consist of microservices (3 at least) and they communicate with each other and some (at least 1) or all of them should connect to any DB(MySQL, Postgres, Mongo, etc).
**Phase 1 (30):**
Need to dockerize the microservices, add dockerfiles for each microservice in their folder
Build & push image to Dockerhub, share url of dockerhub repos
Add a single docker-compose file at root path which will start all microservices, networks and db on a single deployment
**Phase 2 (30):**
Add CI/CD to the repo, can use Jenkins or Github Actions, which will 
Pipeline should run on Pull Request & on main branch
For versioning, you can use the commit hash or semantic versioning or any other way (but dont use latest tag)
Build & push docker images with respective version of the microservices to dockerhub
Use path based filtering so that if there is a change in the appointments folder, only the pipeline will build appointments microservice.
Which means there should be separate pipelines for all microservices and if a change is in one microservice, only that pipeline should be triggered
Update docker-compose file to update the image tag to the one that is built in this pipeline and push back to repo
**Phase 3 (30):**
Add Kubernetes Deployment & Service for all the microservices in respective folder in a single file e.g. 
appointments/k8s/app.yaml
doctors/k8s/app.yaml
frontend/k8s/app.yaml
db/k8s/mysql.yaml
 Make sure you are following best practices of using environment variables for inter-communication, and how to pass those env vars to your pod in best way.
**Phase 4 (20):**
All of the microservice’s Deployment should have K8s Resources for request and limits on memory & CPU (need to read it yourself), add K8s Probes(readiness & liveness) to your container

