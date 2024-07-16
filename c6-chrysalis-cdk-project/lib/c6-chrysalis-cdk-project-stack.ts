import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';


// Define a new CDK stack class
export class C6ChrysalisCdkProjectStack extends cdk.Stack {
 // Constructor for the stack
 constructor(scope: Construct, id: string, props?: cdk.StackProps) {
   super(scope, id, props);


const queue = new sqs.Queue(this, 'C6ChrysalisProjectQueue', {visibilityTimeout:cdk.Duration.seconds(300)
});
 }
}

