var resourceSchema = require('../generated_files/cloudFormationResources').schema;

var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Template",
    "description": "Cloudformation template",
    "type": "object",
    "properties": {
        "AWSTemplateFormatVersion": {
            "type": "string"
        },
        "Description": {
            "description": "Template description",
            "type": "string",
            "maxLength": 1024
        },
        "Parameters": {
            "type": "object",
            "patternProperties": {
                "^[a-zA-Z0-9]+$": {
                    "$ref": "#/definitions/Parameter"
                }
            },
            "maxProperties": 50,
            "additionalProperties": false
        },
        "Mappings": {
            "type": "object",
            "patternProperties": {
                ".*": {
                    "type": "object"
                }
            },
            "additionalProperties": false
        },
        "Conditions": {
            "type": "object",
            "patternProperties": {
                ".*": {
                    "type": "object"
                }
            },
            "additionalProperties": false
        },
        "Resources": {
            "description": "Template resources",
            "type": "object",
            "patternProperties": {
                "^[a-zA-Z0-9]+$": {
                    "$ref": resourceSchema
                }
            },
            "additionalProperties": false
        },
        "Outputs": {
            "type": "object",
            "patternProperties": {
                ".*": {
                    "type": "object",
                    "properties": {
                        "Value": {
                            "type": "object"
                        },
                        "Description": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "Value"
                    ]
                }
            },
            "minProperties": 1,
            "maxProperties": 10,
            "additionalProperties": false
        }
    },
    "required": [
        "Resources"
    ],
    "additionalProperties": false,
    "definitions": {
        "Resource": {
            "type": "object",
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
            ]
        },
        "Parameter": {
            "type": "object",
            "properties": {
                "Type": {
                    "type": "string",
                    "description": "A parameter of type String is simply a literal string.\nA parameter of type Number can be an integer or float. Note that AWS CloudFormation validates the parameter as a number but uses the parameter value within the template as a string.\nA parameter of type CommaDelimitedList is an array of literal strings separated by commas. The member strings are space trimmed and there is one more string than there are commas in the specified value.",
                    "pattern": "String|Number|CommaDelimitedList"
                },
                "Default": {
                    "type": "string",
                    "description": "A value of the appropriate type for the template to use if no value is specified at stack creation. If the parameter has constraints defined, this value must adhere to those constraints."
                },
                "AllowedValues": {
                    "type": "array",
                    "description": "An array containing the list of values allowed for the parameter."
                },
                "NoEcho": {
                    "type": [
                        "string",
                        "boolean"
                    ],
                    "description": "If TRUE, the value of the parameter is masked with asterisks (*****) with aws cloudformation describe-stacks."
                }
            },
            "additionalProperties": true,
            "required": [
                "Type"
            ]
        }
    }
};

exports.schema = schema;