#!/usr/bin/env node

import { spawn } from "node:child_process";
import { access, constants, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

async function run(command, args) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, { stdio: "inherit", shell: false });

    child.on("error", (error) => {
      rejectPromise(error);
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
      }
    });
  });
}

async function ensureAssetsDirectory(path) {
  try {
    await access(path, constants.F_OK);
  } catch (error) {
    throw new Error(`OpenNext assets directory not found at ${path}`);
  }
}

async function main() {
  try {
    await run("npx", ["--no-install", "opennextjs-cloudflare", "build"]);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        "opennextjs-cloudflare CLI not found. Ensure dependencies are installed with `npm install`.",
      );
    }

    throw error;
  }

  const source = resolve(".open-next/assets");
  const destination = resolve("out");

  await ensureAssetsDirectory(source);

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });

  console.log(`Copied ${source} to ${destination} for Cloudflare Pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
