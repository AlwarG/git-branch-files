const getFilePaths = require('./get-file-paths');
const openFiles = require('./open-files');

module.exports = function filesOpener(vscode) {
   let {
      source_branch: defaulBranch
   } = vscode.workspace.getConfiguration()['git-branch-files'] || {};
   
   getFilePaths({
      vscode,
      defaulBranch: defaulBranch || 'master'
   }).then((paths) => {
      openFiles({ vscode, paths }).then(() => {
         vscode.window.showInformationMessage('Your files have been opened');
      });
   }).catch((err) => {
      if (err && err.errorMsg) {
         vscode.window.showErrorMessage(err.errorMsg);
      }
   });
};