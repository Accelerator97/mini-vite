import path from 'path'
import { build } from "esbuild";
import { green } from "picocolors";
import { scanPlugin } from './scanPlugin'
import { preBundlePlugin } from './preBundlePlugin'
import { PRE_BUNDLE_DIR } from '../constant'

export async function optimize(root: string) {
    // 1. 确定入口
    // 2. 从入口处扫描依赖
    // 3. 预构建依赖

    const entry = path.resolve(root, "src/main.tsx")

    const deps = new Set<string>()

    await build({
        entryPoints: [entry],
        bundle: true,
        write: false,
        plugins: [scanPlugin(deps)]
    })

    console.log(
        `${green("需要预构建的依赖")}:\n${[...deps]
            .map(green)
            .map((item) => `  ${item}`)
            .join("\n")}`
    );

    // 3. 预构建依赖
    await build({
        entryPoints: [...deps],
        write: true,
        bundle: true,
        format: "esm",
        splitting: true,
        outdir: path.resolve(root, PRE_BUNDLE_DIR),
        plugins: [preBundlePlugin(deps)],
    });
}