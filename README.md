[![Build Status](https://travis-ci.org/btafel/meteor-fbgraph.svg?branch=master)](https://travis-ci.org/btafel/meteor-fbgraph)

A meteor wrapper package for [fbgraph](http://criso.github.io/fbgraph/)

Currently using fbgraph v1.4.4

## Usage

Can only be used server side. Consult [fbgraph](http://criso.github.io/fbgraph/) for documentation.
The only difference is that the `graph` referenced in the readme is instead `FBGraph` in this package. You do not have to require the module yourself.

Example
```
FBGraph.setAccessToken(access_token);
```
