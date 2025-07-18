// src/node/utils.ts
import path from 'path'
import os from "os";
import { JS_TYPES_RE, HASH_RE, QEURY_RE } from './constant'

export function slash(p: string): string {
    return p.replace(/\\/g, "/");
}
export function removeImportQuery(url: string): string {
    return url.replace(/\?import$/, "");
}
export const isWindows = os.platform() === "win32";

export function normalizePath(id: string): string {
    return path.posix.normalize(isWindows ? slash(id) : id);
}

export function getShortName(file: string, root: string) {
    return file.startsWith(root + "/") ? path.posix.relative(root, file) : file;
}
export const isJSRequest = (id: string): boolean => {
    id = cleanUrl(id);
    if (JS_TYPES_RE.test(id)) {
        return true;
    }
    if (!path.extname(id) && !id.endsWith("/")) {
        return true;
    }
    return false;
};

export const cleanUrl = (url: string): string =>
    url.replace(HASH_RE, "").replace(QEURY_RE, "");


export const isCSSRequest = (id: string): boolean =>
    cleanUrl(id).endsWith(".css");

export function isImportRequest(url: string): boolean {
    return url.endsWith("?import");
}
