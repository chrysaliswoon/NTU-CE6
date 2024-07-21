resource "aws_s3_bucket" "chrysalis_bucket" {
  bucket = "chrysalis-s3-bucket"  # Ensure this name is globally unique

  tags = {
    Name        = "Chrysalis bucket"
    Environment = "Dev"
  }
}