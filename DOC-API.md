## Modules

<dl>
<dt><a href="#module_heartbeat">heartbeat</a></dt>
<dd><p>Module</p>
</dd>
<dt><a href="#module_heartbeat-factory">heartbeat-factory</a></dt>
<dd><p>Factory module</p>
</dd>
</dl>

<a name="module_heartbeat"></a>

## heartbeat
Module


* [heartbeat](#module_heartbeat)
    * [.package()](#module_heartbeat+package)
    * [.health()](#module_heartbeat+health)
    * [.respond()](#module_heartbeat+respond)

<a name="module_heartbeat+package"></a>

### heartbeat.package()
Returns the package name

**Kind**: instance method of <code>[heartbeat](#module_heartbeat)</code>  
<a name="module_heartbeat+health"></a>

### heartbeat.health()
Health check

**Kind**: instance method of <code>[heartbeat](#module_heartbeat)</code>  
**Example** *(Usage Example)*  
```js
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
```
<a name="module_heartbeat+respond"></a>

### heartbeat.respond()
Respond

**Kind**: instance method of <code>[heartbeat](#module_heartbeat)</code>  
**Example** *(Usage Example)*  
```js
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
```
<a name="module_heartbeat-factory"></a>

## heartbeat-factory
Factory module

<a name="module_heartbeat-factory.create"></a>

### heartbeat-factory.create(spec) ⇒ <code>Promise</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[heartbeat-factory](#module_heartbeat-factory)</code>  
**Returns**: <code>Promise</code> - that resolves to {module:heartbeat}  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |

**Example** *(Usage example)*  
```js
    var factory = require("@mitchallen/heartbeat");
 
    factory.create({})
    .then(function(obj) {
        return obj.health();
    })
    .catch( function(err) { 
        console.error(err); 
    });
```
