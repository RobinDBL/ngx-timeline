import { getWorkspace } from "@schematics/angular/utility/workspace";
import { Schema } from "./schema";
import { addRootImport,  updateWorkspace } from '@schematics/angular/utility';
import { Tree } from '@angular-devkit/schematics';

export function ngAdd(options: Schema): void {
  // Add an import `MyLibModule` from `my-lib` to the root of the user's project.
  addRootImport(options.project, ({code, external}) =>
    code`${external('MyLibModule', 'my-lib')}`);

  updateAngularJson()
}

async function updateAngularJson(host: Tree){
  const workspace = await getWorkspace(host);
  updateWorkspace((workspace))
}
