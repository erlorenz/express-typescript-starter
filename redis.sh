# This creates a basic Redis instance for the pub/sub

docker run --name redis-pubsub -p 6379:6379 -d redis
