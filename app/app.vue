<template>
  <div>
    EDGI Webtracker
  </div>
</template>

<script>
//import { download } from "./download-publish-sheet.js"
// import { load } from "./build.js"
import path from "path-browserify"


console.log("starting app...");
//console.log("import.meta.dirname: " + import.meta.dirname);
const folderPath = './public';
const relativeFolderPath = path.relative("/", folderPath);
console.log("relativeFolderPath: " + relativeFolderPath);

//download();
// //load();

</script>
