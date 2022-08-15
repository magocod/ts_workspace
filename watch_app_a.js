const shell = require("shelljs");

shell.echo("move");

shell.cd("apps/app_a");
shell.echo(shell.pwd());

shell.exec("npm run start:dev");
