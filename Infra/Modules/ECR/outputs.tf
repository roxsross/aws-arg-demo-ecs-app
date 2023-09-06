#DemobyRoxs

output "ecr_repository_url" {
  value = aws_ecr_repository.ecr_repository.repository_url
}

output "ecr_repository_arn" {
  value = aws_ecr_repository.ecr_repository.arn
}