(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).Heartbeat = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

module.exports.create = function (spec) {

    return new Promise(function (resolve, reject) {

        spec = spec || {};

        var _name = spec.type || "heartbeat",
            _version = spec.version || "",
            _status = spec.status || "OK",
            _message = spec.message || "The service is running";

        // reject("reason");

        // private 
        var _package2 = "@mitchallen/heartbeat";

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
            package: function _package() {
                return _package2;
            },
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
            health: function health() {
                return new Promise(function (resolve, reject) {
                    resolve("OK");
                });
            },

            respond: function respond() {
                return new Promise(function (resolve, reject) {
                    resolve(_data);
                });
            }
        });
    });
};

},{}]},{},[1])(1)
});