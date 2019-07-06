const handler = argv => {
  console.log(
    "pruning remotes %s",
    []
      .concat(argv.name)
      .concat(argv.names)
      .join(", "),
  );
};

module.exports = {
  command: "prune <name> [names..]",
  desc: "Delete tracked branches gone stale for remotes",
  builder: {},
  handler,
};
