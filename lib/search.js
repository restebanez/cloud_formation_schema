

// it extract an AWS type's schema.
// In the schema definition it looks something like this:
// "Type": { "enum": [ "AWS::EC2::Instance" ] }
// usage:
// getSchemaResourcebyAwsType(schema,  "AWS::EC2::Instance");

function getSchemaResourcebyAwsType(schema, resourceTypeName){
    if(schema['Type'] && schema['Type']['enum'] && schema['Type']['enum'][0] === resourceTypeName){

        if (schema.Properties === undefined){
            throw('Schema error: ' + resourceTypeName + ' resource has not Properties' +
            'schema fragment content:' + JSON.stringify(schema,null,4));
            return false;
        } else if (schema.Properties.properties === undefined){
            throw('Schema error: ' + resourceTypeName + ' resource has not Properties.properties ' +
            'schema fragment content:' + JSON.stringify(schema,null,4));
            return false;
        }

        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": resourceTypeName,
            "description": schema.Properties.title,
            "type": "object",
            "properties": schema.Properties.properties
        }
    }
    for (var key in schema) {
        if(typeof schema[key] === 'object'){
            var result = getSchemaResourcebyAwsType(schema[key], resourceTypeName);
            if (result !== false) return result;
        }
    }
    return false;
}

exports.getSchemaResourcebyAwsType = getSchemaResourcebyAwsType;

