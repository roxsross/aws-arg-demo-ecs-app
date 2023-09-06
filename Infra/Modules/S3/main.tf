#DemobyRoxs

/*===========================
      AWS S3 resources
============================*/

resource "aws_s3_bucket" "s3_bucket" {
  bucket        = var.bucket_name
  acl           = "private"
  force_destroy = true
  tags = {
    Name = var.bucket_name
  }
}