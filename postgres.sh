
# This stores the volume in ./volumes
docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 -v $PWD/volumes/postgres:/var/lib/postgresql/data postgres