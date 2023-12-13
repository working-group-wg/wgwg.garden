
module.exports = function (cfg) {
  cfg.addPassthroughCopy("img");
  cfg.addPassthroughCopy("css");
  cfg.addPassthroughCopy("fonts");
  cfg.addPassthroughCopy("**/*.jpg");
  cfg.addPassthroughCopy("**/*.png");
  cfg.addPassthroughCopy("**/*.svg");
  cfg.setServerPassthroughCopyBehavior("passthrough");
  cfg.ignores.add("README.md");
  return {
  };
};
