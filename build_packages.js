const shell = require("shelljs");

function backTop() {
  shell.cd("../../");
  shell.echo(shell.pwd());
}

/**
 *
 * @param {string} packageName
 */
function compile(packageName) {
  shell.cd("packages/" + packageName);
  shell.echo("build package");
  shell.echo(shell.pwd());
  shell.exec("npm run build");
}

shell.echo("build packages");

compile("a")
backTop()

compile("b")
backTop()

compile("c")
