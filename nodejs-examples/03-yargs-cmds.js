#!/usr/bin/env node

require("yargs")
  .commandDir("cmds")
  .demandCommand(1, "")
  .parse();
