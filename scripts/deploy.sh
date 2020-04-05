echo "Processing deploy.sh"
# set s3 bucket as env variable
S3_BUCKET=nautilusdev.com
# set the default region for aws
aws configure set default.region us-west-1
# set aws_access_key id
aws configure set aws_access_key_id $ACCESS_KEY_ID
# set aws_secret_access_key
aws configure set aws_secret_access_key $SECRET_ACCESS_KEY
# sync files to s3 bucket, deleteing files that don't match
aws s3 sync ./build s3://$S3_BUCKET --delete