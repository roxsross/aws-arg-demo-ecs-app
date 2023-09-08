variable "name" {
  default     = "GitHub_Codestar_Connection"
  type        = string
  description = "(Required) The name of the connection to be created. The name must be unique in the calling AWS account. Changing name will create a new resource"
}

variable "provider_type" {
  default     = "GitHub"
  type        = string
  description = "(optional) The name of the external provider where your third-party code repository is configured. Valid values are Bitbucket, GitHub or GitHubEnterpriseServer. Changing provider_type will create a new resource. Conflicts with host_arn"
}

variable "tags" {
  default = {
    Name = "GitHub_Codestar_Connection"
  }
  type        = map(string)
  description = "(Optional) Map of key-value resource tags to associate with the resource. If configured with a provider default_tags configuration block present, tags with matching keys will overwrite those defined at the provider-level."
}
