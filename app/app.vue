<template>
  <div>
    EDGI Webtracker
  </div>
</template>

<script>
import { download } from "./download-publish-sheet.js"
import { load } from "./build.js"
import path from "path-browserify"


console.log("starting app...");
//console.log("import.meta.dirname: " + import.meta.dirname);
//var testPath = require('path')
console.log("path: " + path);
const relativeFolderPath = path.join('../data-cache');
console.log("relativeFolderPath: " + relativeFolderPath);
// console.log("relativeFolderPath: " + relativeFolderPath);

//download();
load();

</script>
