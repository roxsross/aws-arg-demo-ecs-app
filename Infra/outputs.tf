output "application_url" {
  value       = module.alb_client.dns_alb
  description = "Copy this value in your browser in order to access the deployed app"
}
