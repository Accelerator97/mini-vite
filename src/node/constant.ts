// 增加如下代码
import path from "path";

export const EXTERNAL_TYPES = [
    "css",
    "less",
    "sass",
    "scss",
    "styl",
    "stylus",
    "pcss",
    "postcss",
    "vue",
    "svelte",
    "marko",
    "astro",
    "png",
    "jpe?g",
    "gif",
    "svg",
    "ico",
    "webp",
    "avif",
];

export const BARE_IMPORT_RE = /^[\w@][^:]/;

// 预构建产物默认存放在 node_modules 中的 .m-vite 目录中
export const PRE_BUNDLE_DIR = path.join("node_modules", ".m-vite");

export const JS_TYPES_RE = /\.(?:j|t)sx?$|\.mjs$/;
export const QEURY_RE = /\?.*$/s;
export const HASH_RE = /#.*$/s;

export const DEFAULT_EXTERSIONS = [".tsx", ".ts", ".jsx", "js"];

export const CLIENT_PUBLIC_PATH = "/@vite/client";
// src/node/constants.ts
export const HMR_PORT = 24678;
