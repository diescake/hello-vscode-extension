import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('Hello activated.')

  const disposable = vscode.commands.registerCommand('hello-vscode-extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World run !!')
  })

  context.subscriptions.push(disposable)
}

export const deactivate = () => {
  vscode.window.showInformationMessage('Hello deactivated.')
}
