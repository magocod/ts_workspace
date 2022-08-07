#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
// const debug = require('debug')('app-a:server');
import http from 'http';

import { normalizePort, onListening, onError } from "a"

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening(port, server));

export {}
