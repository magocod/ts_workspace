const shell = require("shelljs");

shell.echo("move");

shell.cd("apps/app_a");
shell.echo(shell.pwd());

shell.cd("..");

shell.echo(shell.pwd());

shell.cd("..");

shell.echo(shell.pwd());

shell.exec("node move_hello.js")
