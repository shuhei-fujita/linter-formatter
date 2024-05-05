## Install

>もしあなたが Node.js や npm（あるいは他のパッケージマネージャー）を使用してない場合、代わりに Biome のスタンドアロンなCLIバイナリを使用できます。 言い換えれば、package.json を持たずに Biome を利用できます。

https://biomejs.dev/ja/guides/manual-installation/

```shell
brew install biome
```

yarn経由で実行すると、`node_modules/.bin`にある`biome`を実行することになる。

```shell
yarn add --dev --exact @biomejs/biome
```

## Refarence

コマンド使用方法は以下を参照
https://biomejs.dev/ja/reference/cli/

```shell
$ biome -h              
Biome official CLI. Use it to check the health of your project or run it to check single files.

Usage: biome COMMAND ...

Available options:
    -h, --help     Prints help information
    -V, --version  Prints version information

Available commands:
    version        Shows the Biome version information and quit
    rage           Prints information for debugging
    start          Start the Biome daemon server process
    stop           Stop the Biome daemon server process
    check          Runs formatter, linter and import sorting to the requested files.
    lint           Run various checks on a set of files.
    format         Run the formatter on a set of files.
    ci             Command to use in CI environments. Runs formatter, linter and import sorting to the
                   requested files.
    init           Bootstraps a new biome project. Creates a configuration file with some defaults.
    lsp-proxy      Acts as a server for the Language Server Protocol over stdin/stdout
    migrate        It updates the configuration when there are breaking changes
    explain        A command to retrieve the documentation of various aspects of the CLI.
```

## Usage

```shell
biome format <ファイル名 or ./srcのようなディレクトリ配下を指定> --write
biome format . --write
```

```shell
biome lint <ファイル名 or ./srcのようなディレクトリ配下を指定> --aplly
biome lint . --aplly
```
