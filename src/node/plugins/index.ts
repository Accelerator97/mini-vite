import { esbuildTransformPlugin } from "./esbuild";
import { importAnalysisPlugin } from "./importAnalysis";
import { resolvePlugin } from "./resolve";
import { Plugin } from "../pluginsType";
import { cssPlugin } from "./css";
import { assetPlugin } from "./assets"
import { clientInjectPlugin } from './clientInject'
export function resolvePlugins(): Plugin[] {
  return [clientInjectPlugin(), resolvePlugin(), esbuildTransformPlugin(), importAnalysisPlugin(), cssPlugin(), assetPlugin()];
}
