import dotenv from "dotenv";
dotenv.config();

import createError from "http-errors";
import express, { Request, Response, ErrorRequestHandler } from "express";
// import path from 'path';
import cookieParser from "cookie-parser";
import logger from "morgan";

import { callFromA } from "a";
import { callFromA as aliasCallFromA } from "a";
import { callFromB } from "b";
import { utils } from "b";
import { AService } from "c";

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req: Request, res: Response) => {
  res.json({
    app: "app_c",
    a: callFromA(),
    alias_a: aliasCallFromA(),
    b: callFromB(),
    b_utils: utils.utilityA(),
    c_service: new AService()
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
} as ErrorRequestHandler);

// module.exports = app;
export = app;
