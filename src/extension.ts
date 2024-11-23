import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Crear un botón en la barra de estado
    let button0 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    button0.text = "Run";
    button0.command = 'extension.accionBoton0';
    button0.show();

    let button1 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 101);
    button1.text = "Build";
    button1.command = 'extension.accionBoton1';
    button1.show();

    let button2 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 102);
    button2.text = "All";
    button2.command = 'extension.accionBoton2';
    button2.show();

    let button3 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 103);
    button3.text = "Clean";
    button3.command = 'extension.accionBoton3';
    button3.show();

    let button4 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 104);
    button4.text = "Debug";
    button4.command = 'extension.accionBoton4';
    button4.show();

    // Registrar comandos
    let disposable0 = vscode.commands.registerCommand('extension.accionBoton0', () => {
        SendTerminalCommand("Make Run");
    });

    let disposable1 = vscode.commands.registerCommand('extension.accionBoton1', () => {
        SendTerminalCommand("Make Build");
    });

    let disposable2 = vscode.commands.registerCommand('extension.accionBoton2', () => {
        SendTerminalCommand("Make All");
    });

    let disposable3 = vscode.commands.registerCommand('extension.accionBoton3', () => {
        SendTerminalCommand("Make Clean");
    });

    let disposable4 = vscode.commands.registerCommand('extension.accionBoton4', () => {
        SendTerminalCommand("Make Debug");
    });

    // Agregar los botones y comandos al contexto de la extensión
    context.subscriptions.push(button0, button1, button2, button3, button4, disposable0, disposable1, disposable2, disposable3, disposable4);
}

export function deactivate() {}

function SendTerminalCommand(Command: string) {
    let terminal = vscode.window.terminals.find(t => t.name === 'Terminal de Make');
    if (!terminal) {
        terminal = vscode.window.createTerminal('Terminal de Make');
    }
    terminal.sendText(Command);
    terminal.show(true);
}
