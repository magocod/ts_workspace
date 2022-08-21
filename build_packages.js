const shell = require("shelljs");

function backTop() {
  shell.cd("../../");
  shell.echo(shell.pwd());
}

/**
 *
 * @param {string} packageName
 */
function compile(name) {
  shell.cd("packages/" + name);
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
