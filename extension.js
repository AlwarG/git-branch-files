// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const filesOpener = require('./tasks/files-opener');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let { commands } = vscode;

	// Open the files
	let openCmd = commands.registerCommand('git-branch-files.openFiles', function () {
		filesOpener(vscode);
	});
	context.subscriptions.push(openCmd);

	// close the current files and open the files
	let openCloseCmd = commands.registerCommand('git-branch-files.openCloseFiles', function () {
		vscode.commands.executeCommand('workbench.action.closeAllEditors').then(() => {
			filesOpener(vscode);
		});
	});
	context.subscriptions.push(openCloseCmd);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}