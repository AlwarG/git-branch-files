const getFilePaths = require('./get-file-paths');
const openFiles = require('./open-files');

module.exports = function filesOpener(vscode) {
   getFilePaths({
      vscode,
      defaulBranch: 'master'
   }).then((paths) => {
      openFiles({ vscode, paths }).then(() => {
         vscode.window.showInformationMessage('Files have been opened');
      });
   }).catch((err) => {
      if (err && err.errorMsg) {
         vscode.window.showErrorMessage(err.errorMsg);
      }
   });
};