/**
    Module: @mitchallen/heartbeat
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module heartbeat
 */

/**
 * 
 * Factory module
 * @module heartbeat-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} spec Named parameters object
 * @returns {Promise} that resolves to {module:heartbeat}
 * @example <caption>Usage example</caption>
    var factory = require("@mitchallen/heartbeat");
 
    factory.create({})
    .then(function(obj) {
        return obj.health();
    })
    .catch( function(err) { 
        console.error(err); 
    });
 */
module.exports.create = (spec) => {

    return new Promise((resolve, reject) => {

        spec = spec || {};

        var _name = spec.type || "heartbeat",
            _version = spec.version || "",
            _status = spec.status || "OK",
            _message = spec.message || "The service is running";

        // reject("reason");

        // private 
        let _package = "@mitchallen/heartbeat";

        var _data = {
            name: _name,
            version: _version,
            status: _status,
            message: _message,
            timestamp: new Date(Date.now())
        };

        resolve({
            // public
            /** Returns the package name
              * @function
              * @instance
              * @memberof module:heartbeat
            */
            package: () => _package,
            /** Health check
              * @function
              * @instance
              * @memberof module:heartbeat
              * @example <caption>Usage Example</caption>
                var factory = require("@mitchallen/heartbeat");
             
                factory.create({})
                .then(function(obj) {
                    return obj.health();
                })
                .then(function(result) {
                    console.log("HEALTH: ", result);
                })
                .catch( function(err) { 
                    console.error(err); 
                });
            */
            health: function() {
                return new Promise((resolve,reject) => {
                    resolve("OK");
                });
            },

            /** Respond
              * @function
              * @instance
              * @memberof module:heartbeat
              * @example <caption>Usage Example</caption>
                var factory = require("@mitchallen/heartbeat");
             
                factory.create({})
                .then(function(obj) {
                    return obj.respond();
                })
                .then(function(result) {
                    console.log("RESPONSE: ", result);
                })
                .catch( function(err) { 
                    console.error(err); 
                });
            */
            respond: function() {
                return new Promise((resolve,reject) => {
                    resolve(_data);
                });
            }
        });
    });
};
