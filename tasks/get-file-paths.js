const {
   exec
} = require('child_process');

module.exports = function getFilePaths({
   vscode,
   defaulBranch
}) {
   return new Promise((resolve, reject) => {
      let {
         rootPath
      } = vscode.workspace;

      // Getting the current branch
      exec(`cd ${rootPath} && git rev-parse --abbrev-ref HEAD`, (err, res) => {
         if (err) {
            return reject(err);
         }

         if (typeof res === 'string') {
            let branchName = res.trim();

            if (branchName !== defaulBranch) {
               // Getting the changed files
               exec(`cd ${rootPath} && git diff --name-only ${defaulBranch} ${branchName}`, (err, result) => {
                  if (err) {
                     return reject(err);
                  }

                  let {
                     maximum_limit: maxLimit,
                     excluded_filetypes: excludedFileTypes
                  } = vscode.workspace.getConfiguration()['git-branch-files'] || {};
                  excludedFileTypes = excludedFileTypes || [];
                  maxLimit = maxLimit || 15;

                  let paths = (result.split('\n') || []).filter((path) => path);
                  paths = paths.map((path) => path.trim());

                  // Filtering the excluded file types
                  paths = paths.filter((path) => {
                     return !excludedFileTypes.some((fileType) => path.endsWith(fileType));
                  });
   
                  if (paths.length > maxLimit) {
                     // Setting the maximum no of files to be open
                     paths.length = maxLimit;
                  }
                  return resolve(paths);
               });
               return;
            }
            return reject({
               errorMsg: `You are in ${defaulBranch} branch`
            });
         }
      });
   });
};