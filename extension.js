// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
    console.log('Chatbot extension activated!'); // Add a log message to confirm activation

    // Add an information message to verify that the extension is activated
    vscode.window.showInformationMessage('Chatbot extension activated!');

	let disposable = vscode.commands.registerCommand('extension.openChatbot', function () {

        console.log('hi');

        // Create and show a new WebView panel
        const panel = vscode.window.createWebviewPanel(
            'chatbotWebview',  // Identifies the type of the webview. Used internally
            'Chatbot',          // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the new webview panel in
            {
                enableScripts: true , // Enables JavaScript in the WebView
                retainContextWhenHidden: true

            },
        );

        // Set the HTML content for the WebView panel
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

function getWebviewContent() {

    console.log('dfdfg')
    const chatbotUrl = 'http://localhost:3000';

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chatbot</title>
    </head>
    <body>
        <iframe src="${chatbotUrl}" width="100%" style="border:none; height: 100vh;" allow="clipboard-read; clipboard-write"></iframe>        
    </body>
    </html>`;
}

module.exports = {
    activate,
    deactivate
};