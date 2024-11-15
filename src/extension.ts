import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Crear un botón en la barra de estado
    let button1 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    button1.text = "¡Botón 1!";
    button1.command = 'extension.accionBoton1';
    button1.show();

    let button2 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 101);
    button2.text = "¡Botón 2!";
    button2.command = 'extension.accionBoton2';
    button2.show();

    // Registrar comandos
    let disposable1 = vscode.commands.registerCommand('extension.accionBoton1', () => {
        vscode.window.showInformationMessage('¡Botón 1 presionado!');
    });

    let disposable2 = vscode.commands.registerCommand('extension.accionBoton2', () => {
        vscode.window.showInformationMessage('¡Botón 2 presionado!');
    });

    // Agregar los botones y comandos al contexto de la extensión
    context.subscriptions.push(button1, button2, disposable1, disposable2);
}

export function deactivate() {}
