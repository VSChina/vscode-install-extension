import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.helloWorld', async () => {
		const extensionId = await vscode.window.showInputBox({ ignoreFocusOut: true, prompt: 'Enter extension ID' });
		if (extensionId) {
			await vscode.commands.executeCommand('workbench.extensions.installExtension', extensionId);
			vscode.window.showInformationMessage(`'${extensionId}' is installed.`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
