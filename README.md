# RDTKLS

RDTK Recipes Syntax Highlight and Language Client for vscode

## Install 

First, find the release that you wish to install at https://github.com/rdtk/vscode-language-client/releases. Then, download the rdtkls-*.vsix file for that release to your machine. Use the following steps to install the .vsix into Visual Studio Code.

1. Open Visual Studio Code and select View->Extensions from the menu to display the Extensions pane.
2. Click the ... at the top-right corner of the Extensions pane and select "Install from VSIX..." on the menu that appears.
3. Locate the .vsix file you download and click "Open".
4. Visual Studio Code will prompt you to restart to enable the extension. Click "Restart" to confirm.


## Usage

1. Open Visual Studio Code with the recipe repository as workspace e.g. `code citk`
2. Select File->Preferences->Settings from the menu to open the settings.
3. Search for 'RDTK' enter the path to the build-generator in the `Generator-path` option.

## Extension Settings

* `rdtkls.generator-path` - Path to RDTK build-generator.
