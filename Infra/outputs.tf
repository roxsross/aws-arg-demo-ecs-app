locals {
  code_start_connection_id = split("/", module.codestar_connection.arn)[1]
}


output "application_url" {
  value       = module.alb_client.dns_alb
  description = "Copy this value in your browser in order to access the deployed app"
}

output "Github_connection_url" {
  value       = "https://${var.aws_region}.console.aws.amazon.com/codesuite/settings/${data.aws_caller_identity.id_current_account.account_id}/${var.aws_region}/connections/${local.code_start_connection_id}"
  description = "Connection url for code star to link Code pipeline to Github app"
}


# https://us-east-1.console.aws.amazon.com/codesuite/settings/459137896070/us-east-1/connections/arn%aws%codestar-connections%us-east-1%459137896070%connection%3d2c598e-6f47-41f6-b3f2-c447bc23725d

# https://us-east-1.console.aws.amazon.com/codesuite/settings/connections/create/github?connectionArn=arn%3Aaws%3Acodestar-connections%3Aus-east-1%3A459137896070%3Aconnection%2F3d2c598e-6f47-41f6-b3f2-c447bc23725d&region=us-east-1&code=88a2d007a63a5cbf6368