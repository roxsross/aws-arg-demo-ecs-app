#DemobyRoxs

output "ecs_cluster_name" {
  value = aws_ecs_cluster.ecs_cluster.name
}

output "ecs_cluster_id" {
  value = aws_ecs_cluster.ecs_cluster.id
}