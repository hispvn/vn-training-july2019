#!/usr/bin/env node

const yargs = require("yargs");

yargs.command(
  "get <url>",
  "get some remote url",
  yargs => {
    yargs.positional("url", {
      describe: "a unique identifier for the server",
      type: "string",
    });

    yargs.option("auth", {
      desc: "authentication (user:pass)",
      type: "string",
      default: "user:pass",
    });

    yargs.option("format", {
      alias: "f",
      describe: "set format",
      choices: ["json", "xml", "csv", "xlsx"],
    });

    yargs.coerce("auth", arg => arg.split(":"));

    yargs.demandOption(["format"]);
  },
  args => {
    console.log(args);
  },
);

yargs.option("verbose", {
  alias: "v",
  count: true,
});

const args = yargs
  .demandCommand(1, "")
  .epilogue("for more information, find our manual at http://example.com")
  .parse();
