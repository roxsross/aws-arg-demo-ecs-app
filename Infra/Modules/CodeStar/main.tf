resource "aws_codestarconnections_connection" "this" {
  name          = var.name
  provider_type = "GitHub"
  tags          = var.tags
}
