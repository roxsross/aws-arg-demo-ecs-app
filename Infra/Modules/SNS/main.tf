#DemobyRoxs

/*====================================================
      AWS SNS topic for deployment notifications
=====================================================*/

resource "aws_sns_topic" "sns_notifications" {
  name = var.sns_name
}