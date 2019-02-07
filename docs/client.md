# Docker Client

Creat and run a container from an image
```shell
docker run <image-name>
```
This is equivalent to the following commands:
```SHELL
docker create <image-name>
docker start -a <container_id>
```

Override the default commands
```shell
docker run <image-name> <override command>

docker run busybox ls
```

List running containers
```shell
docker ps
docker ps --all
```

Restart stopped containers
```shell
docker start <container-id>
```

Remove stopped containers
```shell
docker system prune
```

Retrieve log outputs
```shell
docker logs <container id>
```

Stop containers
```shell
docker stop <container id>
docker kill <container id>
```

Multiple-command containers

Execute commands in running containers
```shell
docker exec -it <container id> <command>
docker exec -it <container id> sh
docker exec -it <container id> bash
docker exec -it <container id> powershell
docker exec -it <container id> zsh
docker run -it <image-name>
```
