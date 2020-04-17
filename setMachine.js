const config = require('./StepFunction.json')
const AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'
createStateMachine = async () => {
    const stepfunctions = new AWS.StepFunctions({
        apiVersion: '2016-11-23',
        endpoint: 'http://localhost:8083'
    });
    const params = {
        definition: JSON.stringify(config), /* required */
        name: 'bayview', /* required */
        roleArn: 'arn:aws:iam::012345678901:role/DummyRole', /* required */
    };
    stepfunctions.createStateMachine(params, function (err, data) {
        if (err) {
            delete params.name;
            params.stateMachineArn = 'arn:aws:states:us-east-1:123456789012:stateMachine:bayview'
            stepfunctions.updateStateMachine(params, function (err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else console.log(data);           // successful response
            });
        } // an error occurred
        else console.log(data);           // successful response
    });


};

createStateMachine()
