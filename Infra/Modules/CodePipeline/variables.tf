#DemobyRoxs

variable "name" {
  description = "The CodePipeline pipeline name"
  type        = string
}

variable "pipe_role" {
  description = "The role assumed by CodePipeline"
  type        = string
}

variable "s3_bucket" {
  description = "S3 bucket used for the artifact store"
  type        = string
}

variable "github_token" {
  description = "Personal access token from Github"
  type        = string
  sensitive   = true
}

variable "repo_owner" {
  description = "The username of the Github repository owner"
  type        = string
}

variable "repo_name" {
  description = "Github repository's name"
  type        = string
}

variable "branch" {
  description = "Github branch used to trigger the CodePipeline"
  type        = string
}

variable "codebuild_project_client" {
  description = "Client's CodeBuild project name"
  type        = string
}

variable "codestar" {
  type = string
}

variable "codebuild_security_secrets" {
  description = "Client's CodeBuild project name"
  type        = string
}


variable "app_name_client" {
  description = "CodeDeploy Application name for the client"
  type        = string
}


variable "deployment_group_client" {
  description = "CodeDeploy deployment group name for the client"
  type        = string
}