'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b2f22d3f-993e-42bc-9651-ea88ce3d4ee3"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Prime Party';


console.log("fail") 
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var handlers = {
    'LaunchRequest': function () {
    	var speechOutput = "Welcome to Prime Party. What kind of party would you like to plan?";

    },
    'PlanPartyIntent': function () {
    	var partyType = this.event.request.intent.slots.party
        var speechOutput = "Congratulations! You have planned a partyType";
    }
};
