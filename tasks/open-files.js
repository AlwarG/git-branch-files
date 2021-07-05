module.exports = async function openFiles({
   paths,
   vscode
}) {
   let {
      workspace
   } = vscode;

   function openFile(path) {
      return new Promise((resolve, reject) => {
         workspace.openTextDocument(`${workspace.rootPath}/${path}`).then((res) => {
            vscode.window.showTextDocument(res, {
               preview: false
            }).then(() => resolve()).catch(() => reject());
         });
      });
   }
   return Promise.all(paths.map((path) => openFile(path)));
}