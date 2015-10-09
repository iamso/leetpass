#! /usr/bin/env node

var colors = require('colors');
var cp = require('copy-paste');
var leetpass = require('../index');

var args = process.argv.slice(2);
var argString = args.join(' ');
var output = leetpass.create(argString);

if (!args.length) {
  console.log(colors.bold.red('Nothing to do here.'));
}
else {
  cp.copy(output);
  console.log(colors.green(output));
}
