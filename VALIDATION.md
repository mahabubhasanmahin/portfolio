# Validation

The current Midnight Glass release audit, actual fixes, test coverage, and limitations are recorded in [AUDIT.md](AUDIT.md).

Historical validation notes remain available in Git history. Use the current audit rather than older light-theme/photo-path instructions.

Run browser suites with a local server running:

```sh
NODE_PATH=<playwright-node-modules> CHROMIUM_PATH=<chromium-binary> TEST_URL=http://localhost:8000/ node tests/audit.cjs
```

Other suites are in `tests/`. The site itself has no npm dependency or build step.
