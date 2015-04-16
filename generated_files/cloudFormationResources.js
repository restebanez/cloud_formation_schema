var schema =
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Resource",
    "description": "Cloudformation template resource",
    "properties": {
        "Properties": {
            "type": "object"
        },
        "Type": {
            "type": "string"
        }
    },
    "required": [
        "Type"
    ],
    "type": "object",
    "definitions": {
        "resource_types": {
            "AWS::AutoScaling::AutoScalingGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::AutoScaling::AutoScalingGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::AutoScaling::AutoScalingGroup",
                        "type": "object",
                        "properties": {
                            "Cooldown": {
                                "title": "Cooldown",
                                "description": "The number of seconds after a scaling activity is completed before any further scaling activities can start.",
                                "type": "string"
                            },
                            "DesiredCapacity": {
                                "title": "DesiredCapacity",
                                "description": "Specifies the desired capacity for the Auto Scaling group.",
                                "type": "string"
                            },
                            "HealthCheckType": {
                                "title": "HealthCheckType",
                                "description": "The service you want the health status from, Amazon EC2 or Elastic Load Balancer. Valid values are EC2 or ELB.",
                                "type": "string"
                            },
                            "MaxSize": {
                                "title": "MaxSize",
                                "description": "The maximum size of the Auto Scaling group.",
                                "type": "string"
                            },
                            "MinSize": {
                                "title": "MinSize",
                                "description": "The minimum size of the Auto Scaling group.",
                                "type": "string"
                            },
                            "PlacementGroup": {
                                "title": "PlacementGroup",
                                "description": "The name of an existing cluster placement group into which you want to launch your instances. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "MaxSize",
                            "MinSize"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::AutoScaling::LaunchConfiguration": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::AutoScaling::LaunchConfiguration"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::AutoScaling::LaunchConfiguration",
                        "type": "object",
                        "properties": {
                            "AssociatePublicIpAddress": {
                                "title": "AssociatePublicIpAddress",
                                "description": "For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group receive public IP addresses. If you specify true, each instance in the Auto Scaling receives a unique public IP address.",
                                "type": "boolean"
                            },
                            "ImageId": {
                                "title": "ImageId",
                                "description": "Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.",
                                "type": "string"
                            },
                            "InstanceId": {
                                "title": "InstanceId",
                                "description": "The ID of the Amazon EC2 instance you want to use to create the launch configuration. Use this property if you want the launch configuration to use settings from an existing Amazon EC2 instance.",
                                "type": "string"
                            },
                            "InstanceType": {
                                "title": "InstanceType",
                                "description": "Specifies the instance type of the EC2 instance.",
                                "type": "string"
                            },
                            "KernelId": {
                                "title": "KernelId",
                                "description": "Provides the ID of the kernel associated with the EC2 AMI.",
                                "type": "string"
                            },
                            "KeyName": {
                                "title": "KeyName",
                                "description": "Provides the name of the EC2 key pair.",
                                "type": "string"
                            },
                            "RamDiskId": {
                                "title": "RamDiskId",
                                "description": "The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.",
                                "type": "string"
                            },
                            "SpotPrice": {
                                "title": "SpotPrice",
                                "description": "The spot price for this autoscaling group. If a spot price is set, then the autoscaling group will launch when the current spot price is less than the amount specified in the template.",
                                "type": "string"
                            },
                            "UserData": {
                                "title": "UserData",
                                "description": "The user data available to the launched EC2 instances.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ImageId",
                            "InstanceType"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::AutoScaling::ScalingPolicy": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::AutoScaling::ScalingPolicy"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::AutoScaling::ScalingPolicy",
                        "type": "object",
                        "properties": {
                            "AdjustmentType": {
                                "title": "AdjustmentType",
                                "description": "Specifies whether the ScalingAdjustment is an absolute number or a percentage of the current capacity. Valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.",
                                "type": "string"
                            },
                            "AutoScalingGroupName": {
                                "title": "AutoScalingGroupName",
                                "description": "The name or Amazon Resource Name (ARN) of the Auto Scaling Group that you want to attach the policy to.",
                                "type": "string"
                            },
                            "Cooldown": {
                                "title": "Cooldown",
                                "description": "The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.",
                                "type": "string"
                            },
                            "ScalingAdjustment": {
                                "title": "ScalingAdjustment",
                                "description": "The number of instances by which to scale. AdjustmentType determines the interpretation of this number (e.g., as an absolute number or as a percentage of the existing Auto Scaling group size). A positive increment adds to the current capacity and a negative value removes from the current capacity.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "AdjustmentType",
                            "AutoScalingGroupName",
                            "ScalingAdjustment"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::AutoScaling::ScheduledAction": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::AutoScaling::ScheduledAction"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::AutoScaling::ScheduledAction",
                        "type": "object",
                        "properties": {
                            "AutoScalingGroupName": {
                                "title": "AutoScalingGroupName",
                                "description": "The name or ARN of the Auto Scaling group.",
                                "type": "string"
                            },
                            "Recurrence": {
                                "title": "Recurrence",
                                "description": "The time in UTC when recurring future actions will start. You specify the start time by following the Unix cron syntax format. For more information about cron syntax, go to http://en.wikipedia.org/wiki/Cron.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "AutoScalingGroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::Authentication": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::Authentication"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::Authentication",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::CustomResource": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::CustomResource"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::CustomResource",
                        "type": "object",
                        "properties": {
                            "ServiceToken": {
                                "title": "ServiceToken",
                                "description": "The service token that was given to the template developer by the service provider to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same region in which you are creating the stack.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ServiceToken"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::Init": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::Init"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::Init",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::Stack": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::Stack"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::Stack",
                        "type": "object",
                        "properties": {
                            "TemplateURL": {
                                "title": "TemplateURL",
                                "description": "The URL of a template that specifies the stack that you want to create as a resource. The template must be stored on an Amazon S3 bucket, so the URL must have the form: https://s3.amazonaws.com/.../TemplateName.template",
                                "type": "string"
                            },
                            "TimeoutInMinutes": {
                                "title": "TimeoutInMinutes",
                                "description": "The length of time, in minutes, that AWS CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. The default is no timeout. When AWS CloudFormation detects that the nested stack has reached the CREATE_COMPLETE state, it marks the nested stack resource as CREATE_COMPLETE in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches CREATE_COMPLETE, AWS CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "TemplateURL"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::WaitCondition": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::WaitCondition"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::WaitCondition",
                        "type": "object",
                        "properties": {
                            "Count": {
                                "title": "Count",
                                "description": "The number of success signals that AWS CloudFormation must receive before it continues the stack creation process. When the wait condition receives the requisite number of success signals, AWS CloudFormation resumes the creation of the stack. If the wait condition does not receive the specified number of success signals before the Timeout period expires, AWS CloudFormation assumes that the wait condition has failed and rolls the stack back.",
                                "type": "string"
                            },
                            "Handle": {
                                "title": "Handle",
                                "description": "A reference to the wait condition handle used to signal this wait condition. Use the Ref intrinsic function to specify an AWS::CloudFormation::WaitConditionHandle resource.",
                                "type": "string"
                            },
                            "Timeout": {
                                "title": "Timeout",
                                "description": "The length of time (in seconds) to wait for the number of signals that the Count property specifies. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Handle",
                            "Timeout"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFormation::WaitConditionHandle": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFormation::WaitConditionHandle"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFormation::WaitConditionHandle",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudFront::Distribution": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudFront::Distribution"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudFront::Distribution",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudTrail::Trail": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudTrail::Trail"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudTrail::Trail",
                        "type": "object",
                        "properties": {
                            "IncludeGlobalServiceEvents": {
                                "title": "IncludeGlobalServiceEvents",
                                "description": "Indicates whether the trail is publishing events from global services, such as IAM, to the log files.",
                                "type": "boolean"
                            },
                            "IsLogging": {
                                "title": "IsLogging",
                                "description": "Indicates whether the CloudTrail trail is currently logging AWS API calls.",
                                "type": "boolean"
                            },
                            "S3BucketName": {
                                "title": "S3BucketName",
                                "description": "The name of the Amazon S3 bucket where CloudTrail publishes log files.",
                                "type": "string"
                            },
                            "S3KeyPrefix": {
                                "title": "S3KeyPrefix",
                                "description": "An Amazon S3 object key prefix that precedes the name of all log files.",
                                "type": "string"
                            },
                            "SnsTopicName": {
                                "title": "SnsTopicName",
                                "description": "The name of an Amazon SNS topic that is notified when new log files are published.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "IsLogging",
                            "S3BucketName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::CloudWatch::Alarm": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::CloudWatch::Alarm"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::CloudWatch::Alarm",
                        "type": "object",
                        "properties": {
                            "ActionsEnabled": {
                                "title": "ActionsEnabled",
                                "description": "Indicates whether or not actions should be executed during any changes to the alarm's state.",
                                "type": "boolean"
                            },
                            "AlarmDescription": {
                                "title": "AlarmDescription",
                                "description": "The description for the alarm.",
                                "type": "string"
                            },
                            "AlarmName": {
                                "title": "AlarmName",
                                "description": "A name for the alarm. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name. For more information, see Name Type.",
                                "type": "string"
                            },
                            "ComparisonOperator": {
                                "title": "ComparisonOperator",
                                "description": "The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand.",
                                "type": "string"
                            },
                            "EvaluationPeriods": {
                                "title": "EvaluationPeriods",
                                "description": "The number of periods over which data is compared to the specified threshold.",
                                "type": "string"
                            },
                            "MetricName": {
                                "title": "MetricName",
                                "description": "The name for the alarm's associated metric. For more information about the metrics that you can specify, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch Developer Guide.",
                                "type": "string"
                            },
                            "Namespace": {
                                "title": "Namespace",
                                "description": "The namespace for the alarm's associated metric.",
                                "type": "string"
                            },
                            "Period": {
                                "title": "Period",
                                "description": "The time over which the specified statistic is applied. You must specify a time in seconds that is also a multiple of 60.",
                                "type": "string"
                            },
                            "Statistic": {
                                "title": "Statistic",
                                "description": "The statistic to apply to the alarm's associated metric.",
                                "type": "string"
                            },
                            "Threshold": {
                                "title": "Threshold",
                                "description": "The value against which the specified statistic is compared.",
                                "type": "string"
                            },
                            "Unit": {
                                "title": "Unit",
                                "description": "The unit for the alarm's associated metric.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ComparisonOperator",
                            "EvaluationPeriods",
                            "MetricName",
                            "Namespace",
                            "Period",
                            "Statistic",
                            "Threshold"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::DynamoDB::Table": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::DynamoDB::Table"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::DynamoDB::Table",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::CustomerGateway": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::CustomerGateway"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::CustomerGateway",
                        "type": "object",
                        "properties": {
                            "IpAddress": {
                                "title": "IpAddress",
                                "description": "The internet-routable IP address for the customer gateway's outside interface. The address must be static.",
                                "type": "string"
                            },
                            "Type": {
                                "title": "Type",
                                "description": "The type of VPN connection that this customer gateway supports.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "IpAddress",
                            "Type"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::DHCPOptions": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::DHCPOptions"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::DHCPOptions",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::EIP": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::EIP"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::EIP",
                        "type": "object",
                        "properties": {
                            "InstanceId": {
                                "title": "InstanceId",
                                "description": "The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::EIPAssociation": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::EIPAssociation"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::EIPAssociation",
                        "type": "object",
                        "properties": {
                            "InstanceId": {
                                "title": "InstanceId",
                                "description": "Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property.",
                                "type": "string"
                            },
                            "NetworkInterfaceId": {
                                "title": "NetworkInterfaceId",
                                "description": "The ID of the network interface to associate with the Elastic IP address (VPC only).",
                                "type": "string"
                            },
                            "PrivateIpAddress": {
                                "title": "PrivateIpAddress",
                                "description": "The private IP address that you want to associate with the Elastic IP address. The private IP address is restricted to the primary and secondary private IP addresses that are associated with the network interface. By default, the private IP address that is associated with the EIP is the primary private IP address of the network interface.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::Instance": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::Instance"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::Instance",
                        "type": "object",
                        "properties": {
                            "DisableApiTermination": {
                                "title": "DisableApiTermination",
                                "description": "Specifies whether the instance can be terminated through the API.",
                                "type": "boolean"
                            },
                            "IamInstanceProfile": {
                                "title": "IamInstanceProfile",
                                "description": "The physical ID of an instance profile or a reference to an AWS::IAM::InstanceProfile resource.",
                                "type": "string"
                            },
                            "ImageId": {
                                "title": "ImageId",
                                "description": "Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.",
                                "type": "string"
                            },
                            "InstanceInitiatedShutdownBehavior": {
                                "title": "InstanceInitiatedShutdownBehavior",
                                "description": "Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command. You can specify stop or terminate. For more information, see the RunInstances command in the Amazon EC2 API Reference.",
                                "type": "string"
                            },
                            "InstanceType": {
                                "title": "InstanceType",
                                "description": "The instance type, such as t2.micro. The default type is \"m1.small\". For a list of instance types, see Instance Families and Types.",
                                "type": "string"
                            },
                            "KernelId": {
                                "title": "KernelId",
                                "description": "The kernel ID.",
                                "type": "string"
                            },
                            "KeyName": {
                                "title": "KeyName",
                                "description": "Provides the name of the Amazon EC2 key pair.",
                                "type": "string"
                            },
                            "Monitoring": {
                                "title": "Monitoring",
                                "description": "Specifies whether monitoring is enabled for the instance.",
                                "type": "boolean"
                            },
                            "PlacementGroupName": {
                                "title": "PlacementGroupName",
                                "description": "The name of an existing placement group that you want to launch the instance into (for cluster instances).",
                                "type": "string"
                            },
                            "PrivateIpAddress": {
                                "title": "PrivateIpAddress",
                                "description": "The private IP address for this instance.",
                                "type": "string"
                            },
                            "RamdiskId": {
                                "title": "RamdiskId",
                                "description": "The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and search for the kernel ID.",
                                "type": "string"
                            },
                            "SourceDestCheck": {
                                "title": "SourceDestCheck",
                                "description": "Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).",
                                "type": "boolean"
                            },
                            "SubnetId": {
                                "title": "SubnetId",
                                "description": "If you're using Amazon VPC, this property specifies the ID of the subnet that you want to launch the instance into. If you specified the NetworkInterfaces property, do not specify this property.",
                                "type": "string"
                            },
                            "Tenancy": {
                                "title": "Tenancy",
                                "description": "The tenancy of the instance that you want to launch. This value can be either \"default\" or \"dedicated\". An instance that has a tenancy value of \"dedicated\" runs on single-tenant hardware and can be launched only into a VPC. For more information, see Using EC2 Dedicated Instances Within Your VPC in the Amazon VPC User Guide.",
                                "type": "string"
                            },
                            "UserData": {
                                "title": "UserData",
                                "description": "Base64-encoded MIME user data that is made available to the instances.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ImageId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::InternetGateway": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::InternetGateway"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::InternetGateway",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::NetworkAcl": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::NetworkAcl"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::NetworkAcl",
                        "type": "object",
                        "properties": {
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC where the network ACL will be created.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "VpcId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::NetworkAclEntry": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::NetworkAclEntry"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::NetworkAclEntry",
                        "type": "object",
                        "properties": {
                            "CidrBlock": {
                                "title": "CidrBlock",
                                "description": "The CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).",
                                "type": "string"
                            },
                            "Egress": {
                                "title": "Egress",
                                "description": "Whether this rule applies to egress traffic from the subnet (\"true\") or ingress traffic to the subnet (\"false\").",
                                "type": "boolean"
                            },
                            "NetworkAclId": {
                                "title": "NetworkAclId",
                                "description": "ID of the ACL where the entry will be created.",
                                "type": "string"
                            },
                            "Protocol": {
                                "title": "Protocol",
                                "description": "IP protocol the rule applies to. You can use -1 to mean all protocols. This must be -1 or a protocol number (go to Protocol Numbers at iana.org).",
                                "type": "integer"
                            },
                            "RuleAction": {
                                "title": "RuleAction",
                                "description": "Whether to allow or deny traffic that matches the rule; valid values are \"allow\" or \"deny\".",
                                "type": "string"
                            },
                            "RuleNumber": {
                                "title": "RuleNumber",
                                "description": "Rule number to assign to the entry (e.g., 100). This must be a positive integer from 1 to 32766.",
                                "type": "integer"
                            }
                        },
                        "required": [
                            "CidrBlock",
                            "Egress",
                            "NetworkAclId",
                            "Protocol",
                            "RuleAction",
                            "RuleNumber"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::NetworkInterface": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::NetworkInterface"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::NetworkInterface",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "The description of this network interface.",
                                "type": "string"
                            },
                            "PrivateIpAddress": {
                                "title": "PrivateIpAddress",
                                "description": "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
                                "type": "string"
                            },
                            "SourceDestCheck": {
                                "title": "SourceDestCheck",
                                "description": "Flag indicating whether traffic to or from the instance is validated.",
                                "type": "boolean"
                            },
                            "SubnetId": {
                                "title": "SubnetId",
                                "description": "The ID of the subnet to associate with the network interface.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "SubnetId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::NetworkInterfaceAttachment": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::NetworkInterfaceAttachment"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::NetworkInterfaceAttachment",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::Route": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::Route"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::Route",
                        "type": "object",
                        "properties": {
                            "DestinationCidrBlock": {
                                "title": "DestinationCidrBlock",
                                "description": "The CIDR address block used for the destination match. For example, \"0.0.0.0/0\". Routing decisions are based on the most specific match.",
                                "type": "string"
                            },
                            "RouteTableId": {
                                "title": "RouteTableId",
                                "description": "The ID of the route table where the route will be added.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "DestinationCidrBlock",
                            "RouteTableId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::RouteTable": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::RouteTable"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::RouteTable",
                        "type": "object",
                        "properties": {
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC where the route table will be created.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "VpcId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::SecurityGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::SecurityGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::SecurityGroup",
                        "type": "object",
                        "properties": {
                            "GroupDescription": {
                                "title": "GroupDescription",
                                "description": "Description of the security group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "GroupDescription"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::SecurityGroupEgress": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::SecurityGroupEgress"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::SecurityGroupEgress",
                        "type": "object",
                        "properties": {
                            "GroupId": {
                                "title": "GroupId",
                                "description": "ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a valid VpcId property or the ID of an existing Amazon VPC security group.",
                                "type": "string"
                            },
                            "IpProtocol": {
                                "title": "IpProtocol",
                                "description": "IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngress",
                                "type": "string"
                            }
                        },
                        "required": [
                            "GroupId",
                            "IpProtocol"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::SecurityGroupIngress": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::SecurityGroupIngress"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::SecurityGroupIngress",
                        "type": "object",
                        "properties": {
                            "IpProtocol": {
                                "title": "IpProtocol",
                                "description": "IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngress",
                                "type": "string"
                            }
                        },
                        "required": [
                            "IpProtocol"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::Subnet": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::Subnet"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::Subnet",
                        "type": "object",
                        "properties": {
                            "AvailabilityZone": {
                                "title": "AvailabilityZone",
                                "description": "The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).",
                                "type": "string"
                            },
                            "CidrBlock": {
                                "title": "CidrBlock",
                                "description": "The CIDR block that you want the subnet to cover (for example, \"10.0.0.0/24\").",
                                "type": "string"
                            }
                        },
                        "required": [
                            "CidrBlock"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::SubnetNetworkAclAssociation": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::SubnetNetworkAclAssociation"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::SubnetNetworkAclAssociation",
                        "type": "object",
                        "properties": {
                            "SubnetId": {
                                "title": "SubnetId",
                                "description": "The ID representing the current association between the original network ACL and the subnet.",
                                "type": "string"
                            },
                            "NetworkAclId": {
                                "title": "NetworkAclId",
                                "description": "The ID of the new ACL to associate with the subnet.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "SubnetId",
                            "NetworkAclId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::SubnetRouteTableAssociation": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::SubnetRouteTableAssociation"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::SubnetRouteTableAssociation",
                        "type": "object",
                        "properties": {
                            "RouteTableId": {
                                "title": "RouteTableId",
                                "description": "The ID of the route table. This is commonly written as a reference to a route table declared elsewhere in the template. For example:",
                                "type": "string"
                            },
                            "SubnetId": {
                                "title": "SubnetId",
                                "description": "The ID of the subnet. This is commonly written as a reference to a subnet declared elsewhere in the template. For example:",
                                "type": "string"
                            }
                        },
                        "required": [
                            "RouteTableId",
                            "SubnetId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::Volume": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::Volume"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::Volume",
                        "type": "object",
                        "properties": {
                            "AvailabilityZone": {
                                "title": "AvailabilityZone",
                                "description": "The Availability Zone in which to create the new volume.",
                                "type": "string"
                            },
                            "Encrypted": {
                                "title": "Encrypted",
                                "description": "Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types. For more information, see Amazon EBS encryption in the Amazon EC2 User Guide for Linux Instances.",
                                "type": "boolean"
                            },
                            "VolumeType": {
                                "title": "VolumeType",
                                "description": "The volume type. You can specify standard, io1, or gp2. If you set the type to io1, you must also set the Iops property. For more information about these values and the default value, see CreateVolume in the Amazon EC2 API Reference.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "AvailabilityZone"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VolumeAttachment": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VolumeAttachment"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VolumeAttachment",
                        "type": "object",
                        "properties": {
                            "Device": {
                                "title": "Device",
                                "description": "How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).",
                                "type": "string"
                            },
                            "InstanceId": {
                                "title": "InstanceId",
                                "description": "The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.",
                                "type": "string"
                            },
                            "VolumeId": {
                                "title": "VolumeId",
                                "description": "The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the volume ID of an existing Amazon EBS volume.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Device",
                            "InstanceId",
                            "VolumeId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPC": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPC"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPC",
                        "type": "object",
                        "properties": {
                            "CidrBlock": {
                                "title": "CidrBlock",
                                "description": "The CIDR block you want the VPC to cover. For example: \"10.0.0.0/16\".",
                                "type": "string"
                            },
                            "EnableDnsSupport": {
                                "title": "EnableDnsSupport",
                                "description": "Specifies whether DNS resolution is supported for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not. By default the value is set to true.",
                                "type": "boolean"
                            },
                            "EnableDnsHostnames": {
                                "title": "EnableDnsHostnames",
                                "description": "Specifies whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not. You can only set EnableDnsHostnames to true if you also set the EnableDnsSupport attribute to true. By default, the value is set to false.",
                                "type": "boolean"
                            },
                            "InstanceTenancy": {
                                "title": "InstanceTenancy",
                                "description": "The allowed tenancy of instances launched into the VPC. ",
                                "type": "string"
                            }
                        },
                        "required": [
                            "CidrBlock"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPCDHCPOptionsAssociation": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPCDHCPOptionsAssociation"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPCDHCPOptionsAssociation",
                        "type": "object",
                        "properties": {
                            "DhcpOptionsId": {
                                "title": "DhcpOptionsId",
                                "description": "The ID of the DHCP options you want to associate with the VPC. Specify default if you want the VPC to use no DHCP options.",
                                "type": "string"
                            },
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC to associate with this DHCP options set.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "DhcpOptionsId",
                            "VpcId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPCGatewayAttachment": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPCGatewayAttachment"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPCGatewayAttachment",
                        "type": "object",
                        "properties": {
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC to associate with this gateway.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "VpcId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPCPeeringConnection": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPCPeeringConnection"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPCPeeringConnection",
                        "type": "object",
                        "properties": {
                            "PeerVpcId": {
                                "title": "PeerVpcId",
                                "description": "The ID of the VPC with which you are creating the peering connection.",
                                "type": "string"
                            },
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC that is requesting a peering connection.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "PeerVpcId",
                            "VpcId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPNConnection": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPNConnection"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPNConnection",
                        "type": "object",
                        "properties": {
                            "Type": {
                                "title": "Type",
                                "description": "The type of VPN connection this virtual private gateway supports.",
                                "type": "string"
                            },
                            "CustomerGatewayId": {
                                "title": "CustomerGatewayId",
                                "description": "The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
                                "type": "string"
                            },
                            "VpnGatewayId": {
                                "title": "VpnGatewayId",
                                "description": "The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Type",
                            "CustomerGatewayId",
                            "VpnGatewayId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPNConnectionRoute": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPNConnectionRoute"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPNConnectionRoute",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPNGateway": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPNGateway"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPNGateway",
                        "type": "object",
                        "properties": {
                            "Type": {
                                "title": "Type",
                                "description": "The type of VPN connection this virtual private gateway supports. The only valid value is \"ipsec.1\".",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Type"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::EC2::VPNGatewayRoutePropagation": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::EC2::VPNGatewayRoutePropagation"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::EC2::VPNGatewayRoutePropagation",
                        "type": "object",
                        "properties": {
                            "VpnGatewayId": {
                                "title": "VpnGatewayId",
                                "description": "The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "VpnGatewayId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElastiCache::CacheCluster": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElastiCache::CacheCluster"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElastiCache::CacheCluster",
                        "type": "object",
                        "properties": {
                            "AutoMinorVersionUpgrade": {
                                "title": "AutoMinorVersionUpgrade",
                                "description": "Indicates that minor engine upgrades will be applied automatically to the cache cluster during the maintenance window.",
                                "type": "boolean"
                            },
                            "CacheNodeType": {
                                "title": "CacheNodeType",
                                "description": "The compute and memory capacity of nodes in a cache cluster.",
                                "type": "string"
                            },
                            "CacheParameterGroupName": {
                                "title": "CacheParameterGroupName",
                                "description": "The name of the cache parameter group that is associated with this cache cluster.",
                                "type": "string"
                            },
                            "CacheSubnetGroupName": {
                                "title": "CacheSubnetGroupName",
                                "description": "The cache subnet group that you associate with a cache cluster.",
                                "type": "string"
                            },
                            "ClusterName": {
                                "title": "ClusterName",
                                "description": "A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the cache cluster. For more information, see Name Type.",
                                "type": "string"
                            },
                            "Engine": {
                                "title": "Engine",
                                "description": "The name of the cache engine to be used for this cache cluster, such as memcached or redis.",
                                "type": "string"
                            },
                            "EngineVersion": {
                                "title": "EngineVersion",
                                "description": "The version of the cache engine to be used for this cluster.",
                                "type": "string"
                            },
                            "NotificationTopicArn": {
                                "title": "NotificationTopicArn",
                                "description": "The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.",
                                "type": "string"
                            },
                            "NumCacheNodes": {
                                "title": "NumCacheNodes",
                                "description": "The number of cache nodes that the cache cluster should have.",
                                "type": "string"
                            },
                            "PreferredAvailabilityZone": {
                                "title": "PreferredAvailabilityZone",
                                "description": "The EC2 Availability Zone in which the cache cluster is created.",
                                "type": "string"
                            },
                            "PreferredMaintenanceWindow": {
                                "title": "PreferredMaintenanceWindow",
                                "description": "The weekly time range (in UTC) during which system maintenance can occur.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "CacheNodeType",
                            "Engine",
                            "NumCacheNodes"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElastiCache::ParameterGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElastiCache::ParameterGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElastiCache::ParameterGroup",
                        "type": "object",
                        "properties": {
                            "CacheParameterGroupFamily": {
                                "title": "CacheParameterGroupFamily",
                                "description": "The name of the cache parameter group family that the cache parameter group can be used with.",
                                "type": "string"
                            },
                            "Description": {
                                "title": "Description",
                                "description": "The description for the Cache Parameter Group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "CacheParameterGroupFamily",
                            "Description"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElastiCache::SecurityGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElastiCache::SecurityGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElastiCache::SecurityGroup",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A description for the cache security group.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElastiCache::SecurityGroupIngress": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElastiCache::SecurityGroupIngress"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElastiCache::SecurityGroupIngress",
                        "type": "object",
                        "properties": {
                            "CacheSecurityGroupName": {
                                "title": "CacheSecurityGroupName",
                                "description": "The name of the Cache Security Group to authorize.",
                                "type": "string"
                            },
                            "EC2SecurityGroupName": {
                                "title": "EC2SecurityGroupName",
                                "description": "Name of the EC2 Security Group to include in the authorization.",
                                "type": "string"
                            },
                            "EC2SecurityGroupOwnerId": {
                                "title": "EC2SecurityGroupOwnerId",
                                "description": "Specifies the AWS Account ID of the owner of the EC2 security group specified in the EC2SecurityGroupName property. The AWS access key ID is not an acceptable value.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "CacheSecurityGroupName",
                            "EC2SecurityGroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElastiCache::SubnetGroup ": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElastiCache::SubnetGroup "
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElastiCache::SubnetGroup ",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "The description for the cache subnet group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Description"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElasticBeanstalk::Application": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElasticBeanstalk::Application"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElasticBeanstalk::Application",
                        "type": "object",
                        "properties": {
                            "ApplicationName": {
                                "title": "ApplicationName",
                                "description": "A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see Name Type.",
                                "type": "string"
                            },
                            "Description": {
                                "title": "Description",
                                "description": "An optional description of this application.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElasticBeanstalk::ApplicationVersion": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElasticBeanstalk::ApplicationVersion"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElasticBeanstalk::ApplicationVersion",
                        "type": "object",
                        "properties": {
                            "ApplicationName": {
                                "title": "ApplicationName",
                                "description": "Name of the Elastic Beanstalk application that is associated with this application version.",
                                "type": "string"
                            },
                            "Description": {
                                "title": "Description",
                                "description": "A description of this application version.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ApplicationName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElasticBeanstalk::ConfigurationTemplate": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElasticBeanstalk::ConfigurationTemplate"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElasticBeanstalk::ConfigurationTemplate",
                        "type": "object",
                        "properties": {
                            "ApplicationName": {
                                "title": "ApplicationName",
                                "description": "Name of the Elastic Beanstalk application that is associated with this configuration template.",
                                "type": "string"
                            },
                            "Description": {
                                "title": "Description",
                                "description": "An optional description for this configuration.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ApplicationName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElasticBeanstalk::Environment": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElasticBeanstalk::Environment"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElasticBeanstalk::Environment",
                        "type": "object",
                        "properties": {
                            "ApplicationName": {
                                "title": "ApplicationName",
                                "description": "The name of the application that is associated with this environment.",
                                "type": "string"
                            },
                            "CNAMEPrefix": {
                                "title": "CNAMEPrefix",
                                "description": "A prefix for your Elastic Beanstalk environment URL.",
                                "type": "string"
                            },
                            "Description": {
                                "title": "Description",
                                "description": "A description that helps you identify this environment.",
                                "type": "string"
                            },
                            "EnvironmentName": {
                                "title": "EnvironmentName",
                                "description": "A name for the Elastic Beanstalk environment. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the environment name. For more information, see Name Type.",
                                "type": "string"
                            },
                            "SolutionStackName": {
                                "title": "SolutionStackName",
                                "description": "The name of an Elastic Beanstalk solution stack that this configuration will use. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify either this parameter or an Elastic Beanstalk configuration template name.",
                                "type": "string"
                            },
                            "TemplateName": {
                                "title": "TemplateName",
                                "description": "The name of the Elastic Beanstalk configuration template to use with the environment. You must specify either this parameter or a solution stack name.",
                                "type": "string"
                            },
                            "VersionLabel": {
                                "title": "VersionLabel",
                                "description": "The version to associate with the environment.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ApplicationName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::ElasticLoadBalancing::LoadBalancer": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::ElasticLoadBalancing::LoadBalancer"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::ElasticLoadBalancing::LoadBalancer",
                        "type": "object",
                        "properties": {
                            "CrossZone": {
                                "title": "CrossZone",
                                "description": "Whether cross-zone load balancing is enabled for the load balancer. With cross-zone load balancing, your load balancer nodes route traffic to the back-end instances across all Availability Zones. By default the CrossZone property is false.",
                                "type": "boolean"
                            },
                            "LoadBalancerName": {
                                "title": "LoadBalancerName",
                                "description": "A name for the load balancer. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the load balancer. The name must be unique within your set of load balancers. For more information, see Name Type.",
                                "type": "string"
                            },
                            "Scheme": {
                                "title": "Scheme",
                                "description": "For load balancers attached to an Amazon VPC, this parameter can be used to specify the type of load balancer to use. Specify internal to create an internal load balancer with a DNS name that resolves to private IP addresses or internet-facing to create a load balancer with a publicly resolvable DNS name, which resolves to public IP addresses.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::AccessKey": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::AccessKey"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::AccessKey",
                        "type": "object",
                        "properties": {
                            "Status": {
                                "title": "Status",
                                "description": "The status of the access key.",
                                "type": "string"
                            },
                            "UserName": {
                                "title": "UserName",
                                "description": "The name of the user that the new key will belong to.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Status",
                            "UserName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::Group": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::Group"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::Group",
                        "type": "object",
                        "properties": {
                            "Path": {
                                "title": "Path",
                                "description": "The path to the group. For more information about paths, see Identifiers for IAM Entities in Using IAM.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::InstanceProfile": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::InstanceProfile"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::InstanceProfile",
                        "type": "object",
                        "properties": {
                            "Path": {
                                "title": "Path",
                                "description": "The path associated with this IAM instance profile. For information about IAM paths, see Friendly Names and Paths in the AWS Identity and Access Management User Guide.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Path"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::Policy": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::Policy"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::Policy",
                        "type": "object",
                        "properties": {
                            "PolicyName": {
                                "title": "PolicyName",
                                "description": "The name of the policy.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "PolicyName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::Role": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::Role"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::Role",
                        "type": "object",
                        "properties": {
                            "Path": {
                                "title": "Path",
                                "description": "The path associated with this role. For information about IAM paths, see Friendly Names and Paths in Using IAM.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Path"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::User": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::User"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::User",
                        "type": "object",
                        "properties": {
                            "Path": {
                                "title": "Path",
                                "description": "The path for the user name. For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::IAM::UserToGroupAddition": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::IAM::UserToGroupAddition"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::IAM::UserToGroupAddition",
                        "type": "object",
                        "properties": {
                            "GroupName": {
                                "title": "GroupName",
                                "description": "The name of group to add users to.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "GroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Kinesis::Stream": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Kinesis::Stream"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Kinesis::Stream",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Logs::LogGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Logs::LogGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Logs::LogGroup",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Logs::MetricFilter": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Logs::MetricFilter"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Logs::MetricFilter",
                        "type": "object",
                        "properties": {
                            "LogGroupName": {
                                "title": "LogGroupName",
                                "description": "The name of an existing log group that you want to associate with this metric filter.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "LogGroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::OpsWorks::App": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::OpsWorks::App"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::OpsWorks::App",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A description of the app.",
                                "type": "string"
                            },
                            "EnableSsl": {
                                "title": "EnableSsl",
                                "description": "Whether to enable SSL for this app.",
                                "type": "boolean"
                            },
                            "Name": {
                                "title": "Name",
                                "description": "The AWS OpsWorks app name.",
                                "type": "string"
                            },
                            "Shortname": {
                                "title": "Shortname",
                                "description": "The app short name, which is used internally by AWS OpsWorks and by Chef recipes.",
                                "type": "string"
                            },
                            "StackId": {
                                "title": "StackId",
                                "description": "The AWS OpsWorks stack ID that this app will be associated with.",
                                "type": "string"
                            },
                            "Type": {
                                "title": "Type",
                                "description": "The app type. Each supported type is associated with a particular layer. For more information, see CreateApp in the AWS OpsWorks API Reference.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Name",
                            "StackId",
                            "Type"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::OpsWorks::ElasticLoadBalancerAttachment": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::OpsWorks::ElasticLoadBalancerAttachment"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::OpsWorks::ElasticLoadBalancerAttachment",
                        "type": "object",
                        "properties": {
                            "ElasticLoadBalancerName": {
                                "title": "ElasticLoadBalancerName",
                                "description": "Elastic Load Balancing load balancer name.",
                                "type": "string"
                            },
                            "LayerId": {
                                "title": "LayerId",
                                "description": "The AWS OpsWorks layer ID that the Elastic Load Balancing load balancer will be attached to.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ElasticLoadBalancerName",
                            "LayerId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::OpsWorks::Instance": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::OpsWorks::Instance"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::OpsWorks::Instance",
                        "type": "object",
                        "properties": {
                            "AmiId": {
                                "title": "AmiId",
                                "description": "The ID of the custom AMI to be used to create the instance. The AMI should be based on one of the standard AWS OpsWorks APIs.",
                                "type": "string"
                            },
                            "Architecture": {
                                "title": "Architecture",
                                "description": "The instance architecture.",
                                "type": "string"
                            },
                            "AvailabilityZone": {
                                "title": "AvailabilityZone",
                                "description": "The instance Availability Zone.",
                                "type": "string"
                            },
                            "InstallUpdatesOnBoot": {
                                "title": "InstallUpdatesOnBoot",
                                "description": "Whether to install operating system and package updates when the instance boots.",
                                "type": "boolean"
                            },
                            "InstanceType": {
                                "title": "InstanceType",
                                "description": "The instance type, which must be supported by AWS OpsWorks. For more information, see CreateInstance in the AWS OpsWorks API Reference.",
                                "type": "string"
                            },
                            "Os": {
                                "title": "Os",
                                "description": "The instance operating system. For more information, see CreateInstance in the AWS OpsWorks API Reference.",
                                "type": "string"
                            },
                            "RootDeviceType": {
                                "title": "RootDeviceType",
                                "description": "The instance root device type.",
                                "type": "string"
                            },
                            "SshKeyName": {
                                "title": "SshKeyName",
                                "description": "The instance SSH key name.",
                                "type": "string"
                            },
                            "StackId": {
                                "title": "StackId",
                                "description": "The ID of the AWS OpsWorks stack that this instance will be associated with.",
                                "type": "string"
                            },
                            "SubnetId": {
                                "title": "SubnetId",
                                "description": "The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks to launch the instance in a different subnet. ",
                                "type": "string"
                            }
                        },
                        "required": [
                            "InstanceType",
                            "StackId"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::OpsWorks::Layer": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::OpsWorks::Layer"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::OpsWorks::Layer",
                        "type": "object",
                        "properties": {
                            "AutoAssignElasticIps": {
                                "title": "AutoAssignElasticIps",
                                "description": "Whether to automatically assign an Elastic IP address to Amazon EC2 instances in this layer.",
                                "type": "boolean"
                            },
                            "AutoAssignPublicIps": {
                                "title": "AutoAssignPublicIps",
                                "description": "For AWS OpsWorks stacks that are running in a VPC, whether to automatically assign a public IP address to Amazon EC2 instances in this layer.",
                                "type": "boolean"
                            },
                            "CustomInstanceProfileArn": {
                                "title": "CustomInstanceProfileArn",
                                "description": "The Amazon Resource Name (ARN) of an IAM instance profile that is to be used for the Amazon EC2 instances in this layer.",
                                "type": "string"
                            },
                            "EnableAutoHealing": {
                                "title": "EnableAutoHealing",
                                "description": "Whether to automatically heal Amazon EC2 instances that have become disconnected or timed out.",
                                "type": "boolean"
                            },
                            "InstallUpdatesOnBoot": {
                                "title": "InstallUpdatesOnBoot",
                                "description": "Whether to install operating system and package updates when the instance boots.",
                                "type": "boolean"
                            },
                            "Name": {
                                "title": "Name",
                                "description": "The AWS OpsWorks layer name.",
                                "type": "string"
                            },
                            "Shortname": {
                                "title": "Shortname",
                                "description": "The layer short name, which is used internally by AWS OpsWorks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. ",
                                "type": "string"
                            },
                            "StackId": {
                                "title": "StackId",
                                "description": "The ID of the AWS OpsWorks stack that this layer will be associated with.",
                                "type": "string"
                            },
                            "Type": {
                                "title": "Type",
                                "description": "The layer type. A stack cannot have more than one layer of the same type. For more information, see CreateLayer in the AWS OpsWorks API Reference.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "AutoAssignElasticIps",
                            "AutoAssignPublicIps",
                            "EnableAutoHealing",
                            "Name",
                            "Shortname",
                            "StackId",
                            "Type"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::OpsWorks::Stack": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::OpsWorks::Stack"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::OpsWorks::Stack",
                        "type": "object",
                        "properties": {
                            "DefaultAvailabilityZone": {
                                "title": "DefaultAvailabilityZone",
                                "description": "The stack's default Availability Zone, which must be in the specified region.",
                                "type": "string"
                            },
                            "DefaultInstanceProfileArn": {
                                "title": "DefaultInstanceProfileArn",
                                "description": "The Amazon Resource Name (ARN) of an IAM instance profile that is the default profile for all of the stack's Amazon EC2 instances.",
                                "type": "string"
                            },
                            "DefaultOs": {
                                "title": "DefaultOs",
                                "description": "The stack's default operating system. For more information, see CreateStack in the AWS OpsWorks API Reference.",
                                "type": "string"
                            },
                            "DefaultRootDeviceType": {
                                "title": "DefaultRootDeviceType",
                                "description": "The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see CreateStack in the AWS OpsWorks API Reference.",
                                "type": "string"
                            },
                            "DefaultSshKeyName": {
                                "title": "DefaultSshKeyName",
                                "description": "A default SSH key for the stack instances. You can override this value when you create or update an instance.",
                                "type": "string"
                            },
                            "HostnameTheme": {
                                "title": "HostnameTheme",
                                "description": "The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. For more information, see CreateStack in the AWS OpsWorks API Reference.",
                                "type": "string"
                            },
                            "Name": {
                                "title": "Name",
                                "description": "The name of the AWS OpsWorks stack.",
                                "type": "string"
                            },
                            "ServiceRoleArn": {
                                "title": "ServiceRoleArn",
                                "description": "The AWS Identity and Access Management (IAM) role that AWS OpsWorks uses to work with AWS resources on your behalf. You must specify an Amazon Resource Name (ARN) for an existing IAM role.",
                                "type": "string"
                            },
                            "UseCustomCookbooks": {
                                "title": "UseCustomCookbooks",
                                "description": "Whether the stack uses custom cookbooks.",
                                "type": "boolean"
                            },
                            "UseOpsworksSecurityGroups": {
                                "title": "UseOpsworksSecurityGroups",
                                "description": "Whether to associate the AWS OpsWorks built-in security groups with the stack's layers.",
                                "type": "boolean"
                            },
                            "VpcId": {
                                "title": "VpcId",
                                "description": "The ID of the VPC that the stack is to be launched into, which must be in the specified region. All instances are launched into this VPC. If you specify this property, you must specify the DefaultSubnetId property.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "DefaultInstanceProfileArn",
                            "Name",
                            "ServiceRoleArn"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Redshift::Cluster": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Redshift::Cluster"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Redshift::Cluster",
                        "type": "object",
                        "properties": {
                            "AllowVersionUpgrade": {
                                "title": "AllowVersionUpgrade",
                                "description": "When a new version of the Amazon Redshift is released, indicates whether upgrades can be applied to the engine that is running on the cluster. The upgrades are applied during the maintenance window.",
                                "type": "boolean"
                            },
                            "AvailabilityZone": {
                                "title": "AvailabilityZone",
                                "description": "The Amazon EC2 Availability Zone in which you want to provision your Amazon Redshift cluster. For example, if you have several Amazon EC2 instances running in a specific Availability Zone, you might want the cluster to be provisioned in the same zone in order to decrease network latency.",
                                "type": "string"
                            },
                            "ClusterParameterGroupName": {
                                "title": "ClusterParameterGroupName",
                                "description": "The name of the parameter group that you want to associate with this cluster.",
                                "type": "string"
                            },
                            "ClusterSubnetGroupName": {
                                "title": "ClusterSubnetGroupName",
                                "description": "The name of a cluster subnet group that you want to associate with this cluster.",
                                "type": "string"
                            },
                            "ClusterType": {
                                "title": "ClusterType",
                                "description": "The type of cluster. You can specify single-node or multi-node.",
                                "type": "string"
                            },
                            "ClusterVersion": {
                                "title": "ClusterVersion",
                                "description": "The Amazon Redshift engine version that you want to deploy on the cluster.",
                                "type": "string"
                            },
                            "DBName": {
                                "title": "DBName",
                                "description": "The name of the first database that is created when the cluster is created.",
                                "type": "string"
                            },
                            "ElasticIp": {
                                "title": "ElasticIp",
                                "description": "The Elastic IP (EIP) address for the cluster.",
                                "type": "string"
                            },
                            "Encrypted": {
                                "title": "Encrypted",
                                "description": "Indicates whether the data in the cluster is encrypted at rest.",
                                "type": "boolean"
                            },
                            "HsmClientCertificateIdentifier": {
                                "title": "HsmClientCertificateIdentifier",
                                "description": "Specifies the name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.",
                                "type": "string"
                            },
                            "HsmConfigurationIdentifier": {
                                "title": "HsmConfigurationIdentifier",
                                "description": "Specifies the name of the HSM configuration that contains the information that the Amazon Redshift cluster can use to retrieve and store keys in an HSM.",
                                "type": "string"
                            },
                            "MasterUsername": {
                                "title": "MasterUsername",
                                "description": "The user name that is associated with the master user account for this cluster.",
                                "type": "string"
                            },
                            "MasterUserPassword": {
                                "title": "MasterUserPassword",
                                "description": "The password associated with the master user account for this cluster.",
                                "type": "string"
                            },
                            "NodeType": {
                                "title": "NodeType",
                                "description": "The node type that is provisioned for this cluster.",
                                "type": "string"
                            },
                            "OwnerAccount": {
                                "title": "OwnerAccount",
                                "description": "When you restore from a snapshot from another AWS account, the 12-digit AWS account ID that contains that snapshot.",
                                "type": "string"
                            },
                            "PreferredMaintenanceWindow": {
                                "title": "PreferredMaintenanceWindow",
                                "description": "The weekly time range (in UTC) during which automated cluster maintenance can occur. The format of the time range is ddd:hh24:mi-ddd:hh24:mi.",
                                "type": "string"
                            },
                            "PubliclyAccessible": {
                                "title": "PubliclyAccessible",
                                "description": "Indicates whether the cluster can be accessed from a public network.",
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "ClusterType",
                            "DBName",
                            "MasterUsername",
                            "MasterUserPassword",
                            "NodeType"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Redshift::ClusterParameterGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Redshift::ClusterParameterGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Redshift::ClusterParameterGroup",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A description of the parameter group.",
                                "type": "string"
                            },
                            "ParameterGroupFamily": {
                                "title": "ParameterGroupFamily",
                                "description": "The Amazon Redshift engine version that applies to this cluster parameter group. The cluster engine version determines the set of parameters that you can specify in the Parameters property. ",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Description",
                            "ParameterGroupFamily"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Redshift::ClusterSecurityGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Redshift::ClusterSecurityGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Redshift::ClusterSecurityGroup",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A description of the security group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Description"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Redshift::ClusterSecurityGroupIngress": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Redshift::ClusterSecurityGroupIngress"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Redshift::ClusterSecurityGroupIngress",
                        "type": "object",
                        "properties": {
                            "ClusterSecurityGroupName": {
                                "title": "ClusterSecurityGroupName",
                                "description": "The name of the Amazon Redshift security group that will be associated with the ingress rule.",
                                "type": "string"
                            },
                            "CIDRIP": {
                                "title": "CIDRIP",
                                "description": "The IP address range that has inbound access to the Amazon Redshift security group.",
                                "type": "string"
                            },
                            "EC2SecurityGroupName": {
                                "title": "EC2SecurityGroupName",
                                "description": "The Amazon EC2 security group that will be added the Amazon Redshift security group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "ClusterSecurityGroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Redshift::ClusterSubnetGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Redshift::ClusterSubnetGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Redshift::ClusterSubnetGroup",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A description of the subnet group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Description"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::RDS::DBInstance": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::RDS::DBInstance"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::RDS::DBInstance",
                        "type": "object",
                        "properties": {
                            "AllocatedStorage": {
                                "title": "AllocatedStorage",
                                "description": "The allocated storage size specified in gigabytes (GB).",
                                "type": "string"
                            },
                            "AllowMajorVersionUpgrade": {
                                "title": "AllowMajorVersionUpgrade",
                                "description": "Indicates whether major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is applied asynchronously as soon as possible.",
                                "type": "boolean"
                            },
                            "AutoMinorVersionUpgrade": {
                                "title": "AutoMinorVersionUpgrade",
                                "description": "Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. The default value is true.",
                                "type": "boolean"
                            },
                            "AvailabilityZone": {
                                "title": "AvailabilityZone",
                                "description": "The name of the Availability Zone where the DB instance is located. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.",
                                "type": "string"
                            },
                            "BackupRetentionPeriod": {
                                "title": "BackupRetentionPeriod",
                                "description": "The number of days for which automatic DB snapshots are retained.",
                                "type": "string"
                            },
                            "DBInstanceClass": {
                                "title": "DBInstanceClass",
                                "description": "The name of the compute and memory capacity class of the DB instance.",
                                "type": "string"
                            },
                            "DBInstanceIdentifier": {
                                "title": "DBInstanceIdentifier",
                                "description": "A name for the DB instance. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see Name Type.",
                                "type": "string"
                            },
                            "DBName": {
                                "title": "DBName",
                                "description": "The name of the initial database of this instance that was provided at create time, if one was specified. This same name is returned for the life of the DB instance.",
                                "type": "string"
                            },
                            "DBParameterGroupName": {
                                "title": "DBParameterGroupName",
                                "description": "The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.",
                                "type": "string"
                            },
                            "DBSnapshotIdentifier": {
                                "title": "DBSnapshotIdentifier",
                                "description": "The identifier for the DB snapshot to restore from.",
                                "type": "string"
                            },
                            "DBSubnetGroupName": {
                                "title": "DBSubnetGroupName",
                                "description": "A DB subnet group to associate with the DB instance.",
                                "type": "string"
                            },
                            "EngineVersion": {
                                "title": "EngineVersion",
                                "description": "The version number of the database engine to use.",
                                "type": "string"
                            },
                            "LicenseModel": {
                                "title": "LicenseModel",
                                "description": "The license model information for the DB instance.",
                                "type": "string"
                            },
                            "MultiAZ": {
                                "title": "MultiAZ",
                                "description": "Specifies if the DB instance is a multiple Availability Zone deployment. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.",
                                "type": "boolean"
                            },
                            "OptionGroupName": {
                                "title": "OptionGroupName",
                                "description": "An option group that this database instance is associated with.",
                                "type": "string"
                            },
                            "Port": {
                                "title": "Port",
                                "description": "The port for the instance.",
                                "type": "string"
                            },
                            "PreferredBackupWindow": {
                                "title": "PreferredBackupWindow",
                                "description": "The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.",
                                "type": "string"
                            },
                            "PreferredMaintenanceWindow": {
                                "title": "PreferredMaintenanceWindow",
                                "description": "The weekly time range (in UTC) during which system maintenance can occur.",
                                "type": "string"
                            },
                            "PubliclyAccessible": {
                                "title": "PubliclyAccessible",
                                "description": "Indicates whether the database instance is an Internet-facing instance. If you specify true, an instance is created with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, an internal instance is created with a DNS name that resolves to a private IP address. ",
                                "type": "boolean"
                            },
                            "SourceDBInstanceIdentifier": {
                                "title": "SourceDBInstanceIdentifier",
                                "description": "If you want to create a read replica DB instance, specify the ID of the source database instance. Each database instance can have a certain number of read replicas. For more information, see Working with Read Replicas in the Amazon Relational Database Service Developer Guide.",
                                "type": "string"
                            },
                            "StorageType": {
                                "title": "StorageType",
                                "description": "The storage type associated with this database instance.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "AllocatedStorage",
                            "DBInstanceClass"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::RDS::DBParameterGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::RDS::DBParameterGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::RDS::DBParameterGroup",
                        "type": "object",
                        "properties": {
                            "Description": {
                                "title": "Description",
                                "description": "A friendly description of the RDS parameter group. For example, \"My Parameter Group\".",
                                "type": "string"
                            },
                            "Family": {
                                "title": "Family",
                                "description": "The database family of this RDS parameter group. For example, \"MySQL5.1\".",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Description",
                            "Family"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::RDS::DBSubnetGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::RDS::DBSubnetGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::RDS::DBSubnetGroup",
                        "type": "object",
                        "properties": {
                            "DBSubnetGroupDescription": {
                                "title": "DBSubnetGroupDescription",
                                "description": "The description for the DB Subnet Group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "DBSubnetGroupDescription"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::RDS::DBSecurityGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::RDS::DBSecurityGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::RDS::DBSecurityGroup",
                        "type": "object",
                        "properties": {
                            "GroupDescription": {
                                "title": "GroupDescription",
                                "description": "Description of the security group.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "GroupDescription"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::RDS::DBSecurityGroupIngress": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::RDS::DBSecurityGroupIngress"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::RDS::DBSecurityGroupIngress",
                        "type": "object",
                        "properties": {
                            "DBSecurityGroupName": {
                                "title": "DBSecurityGroupName",
                                "description": "The name (ARN) of the AWS::RDS::DBSecurityGroup to which this ingress will be added.",
                                "type": "string"
                            },
                            "EC2SecurityGroupId": {
                                "title": "EC2SecurityGroupId",
                                "description": "The ID of the VPC or EC2 security group to authorize.",
                                "type": "string"
                            },
                            "EC2SecurityGroupName": {
                                "title": "EC2SecurityGroupName",
                                "description": "The name of the EC2 security group to authorize.",
                                "type": "string"
                            },
                            "EC2SecurityGroupOwnerId": {
                                "title": "EC2SecurityGroupOwnerId",
                                "description": "The AWS Account Number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "DBSecurityGroupName"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Route53::HealthCheck": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Route53::HealthCheck"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Route53::HealthCheck",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Route53::HostedZone": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Route53::HostedZone"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Route53::HostedZone",
                        "type": "object",
                        "properties": {
                            "Name": {
                                "title": "Name",
                                "description": "The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Name"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Route53::RecordSet": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Route53::RecordSet"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Route53::RecordSet",
                        "type": "object",
                        "properties": {
                            "Comment": {
                                "title": "Comment",
                                "description": "Any comments you want to include about the hosted zone.",
                                "type": "string"
                            },
                            "Failover": {
                                "title": "Failover",
                                "description": "Designates the record set as a PRIMARY or SECONDARY failover record set. When you have more than one resource performing the same function, you can configure Amazon Route 53 to check the health of your resources and use only health resources to respond to DNS queries. You cannot create nonfailover resource record sets that have the same Name and Type property values as failover resource record sets. For more information, see the Failover element in the Amazon Route 53 API Reference.",
                                "type": "string"
                            },
                            "HealthCheckId": {
                                "title": "HealthCheckId",
                                "description": "The health check ID that you want to apply to this record set. Amazon Route 53 returns this resource record set in response to a DNS query only while record set is healthy.",
                                "type": "string"
                            },
                            "Name": {
                                "title": "Name",
                                "description": "The name of the domain. This must be a fully specified domain, ending with a period as the last label indication. If you omit the final period, Amazon Route 53 assumes the domain is relative to the root.",
                                "type": "string"
                            },
                            "TTL": {
                                "title": "TTL",
                                "description": "The resource record cache time to live (TTL), in seconds. If you specify this property, do not specify the AliasTarget property. For alias target records, the alias uses a TTL value from the target.",
                                "type": "string"
                            },
                            "Type": {
                                "title": "Type",
                                "description": "The type of records to add.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Name",
                            "Type"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::Route53::RecordSetGroup": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::Route53::RecordSetGroup"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::Route53::RecordSetGroup",
                        "type": "object",
                        "properties": {
                            "Comment": {
                                "title": "Comment",
                                "description": "Any comments you want to include about the hosted zone.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::S3::Bucket": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::S3::Bucket"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::S3::Bucket",
                        "type": "object",
                        "properties": {
                            "AccessControl": {
                                "title": "AccessControl",
                                "description": "A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see Canned ACLs in the Amazon S3 documentation.",
                                "type": "string"
                            },
                            "BucketName": {
                                "title": "BucketName",
                                "description": "A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name. For more information, see Name Type. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-).",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::S3::BucketPolicy": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::S3::BucketPolicy"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::S3::BucketPolicy",
                        "type": "object",
                        "properties": {
                            "Bucket": {
                                "title": "Bucket",
                                "description": "The Amazon S3 bucket that the policy applies to.",
                                "type": "string"
                            }
                        },
                        "required": [
                            "Bucket"
                        ]
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::SDB::Domain": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::SDB::Domain"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::SDB::Domain",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::SNS::Topic": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::SNS::Topic"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::SNS::Topic",
                        "type": "object",
                        "properties": {
                            "DisplayName": {
                                "title": "DisplayName",
                                "description": "A developer-defined string that can be used to identify this SNS topic.",
                                "type": "string"
                            }
                        },
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::SNS::TopicPolicy": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::SNS::TopicPolicy"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::SNS::TopicPolicy",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::SQS::Queue": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::SQS::Queue"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::SQS::Queue",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            },
            "AWS::SQS::QueuePolicy": {
                "properties": {
                    "Type": {
                        "enum": [
                            "AWS::SQS::QueuePolicy"
                        ]
                    },
                    "Properties": {
                        "title": " AWS::SQS::QueuePolicy",
                        "type": "object",
                        "properties": {},
                        "required": []
                    }
                },
                "required": [
                    "Properties"
                ]
            }
        }
    }
};
exports.schema = schema;
