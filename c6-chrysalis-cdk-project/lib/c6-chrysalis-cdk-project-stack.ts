import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';

// Define a new CDK stack class
export class C6ChrysalisCdkProjectStack extends cdk.Stack {
 // Constructor for the stack
 constructor(scope: Construct, id: string, props?: cdk.StackProps) {
   super(scope, id, props);


const queue = new sqs.Queue(this, 'C6ChrysalisProjectQueue', {visibilityTimeout:cdk.Duration.seconds(300)
});

new s3.Bucket(this, 'C6S3BucketChrysalis', {
  versioned: true,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});

 }
}

