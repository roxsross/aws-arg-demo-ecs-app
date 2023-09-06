#DemobyRoxs

output "project_id" {
  value = aws_codebuild_project.aws_codebuild.id
}

output "project_arn" {
  value = aws_codebuild_project.aws_codebuild.arn
}