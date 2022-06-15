# exam-helper-api

A sister project to [exam-helper](https://github.com/Bozhidar-A/exam-helper).

It is the API behind it, making it fully independent!

Built with node.js, express, MongoDB and Docker

---

## Working with the repo

1. Have node, npm and Docker installed
2. Run ```npm install```
3. Copy .env.sample to .env. With the vars inside everything should just work
4. Running
3a. From source - head to ```exam-helper-api-app/app/config/conn.js``` and change the connection string. .env vars still must be provided. A local install of MongoDB is needed
3b. Docker - run ```docker-compose up -f DockerComposeDEV.yml```. This will both build the image and run it

If you wish to support the project simply submit a pull request!