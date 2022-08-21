import { Server } from "http";
import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line
const debug = require("debug")("app-a:server");

/* eslint-disable no-alert,  @typescript-eslint/no-unused-vars */
// eslint-disable-next-line
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
  res.setHeader("Content-Type", "application/json");

  res.json({
    message: err.message,
    msg: err.msg,
    // error: err.message,
  });
}

/**
 * Normalize a port into a number, string, or false.
 */
export function normalizePort(val: string) {
  const port = parseInt(val as string, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
// eslint-disable-next-line
export function onError(error: any, port: number | string) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
export function onListening(port: number, server: Server) {
  return function () {
    const addr = server.address();
    const bind =
      typeof addr === "string"
        ? "pipe " + addr
        : // eslint-disable-next-line
          "port " + addr!.port;
    debug("Listening on " + bind);
    console.log(`Server is running http://localhost:${port}...`);
  };
}
