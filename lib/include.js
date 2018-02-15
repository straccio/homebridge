// var program = require('commander');
var hap = require("hap-nodejs");
// var version = require('./version');
var Server = require('./server').Server;
var Plugin = require('./plugin').Plugin;
var User = require('./user').User;
var log = require("./logger")._system;
var  api = require("./api").API
var logger = require("./logger");
var PlatformAccessory = require("./platformAccessory").PlatformAccessory
module.exports = {
	hap:hap,
	Server:Server,
	Plugin:Plugin,
	User:User,
	log:log,
	API:api,
	Service:hap.Service,
	PlatformAccessory:PlatformAccessory,
	Characteristic:hap.Characteristic,
	logger:logger
}
