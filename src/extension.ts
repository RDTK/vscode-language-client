
import { workspace } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

export function activate() {
	console.log('Starting RDTKLS ...');

	let serverBinary = "sh"
	const bin = workspace.getConfiguration().get("rdtkls.generator-path")
	
	let serverArguments = [ '-c', `LANG=C.UTF-8 BUILD_GENERATOR_CONFIG_FILES= ${bin} language-server` ];

	let serverOptions: ServerOptions = {
		command: serverBinary,
		args: serverArguments,
		transport: TransportKind.socket
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for rdtk recipes
		documentSelector: [
			{ language: 'project-recipe' },
			{ language: 'distribution-recipe' },
			{ language: 'template-recipe' }

		],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'rdtkls',
		'RDTK LS',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();

	console.log('Congratulations, your extension "RDTKLS" is now active!');
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
