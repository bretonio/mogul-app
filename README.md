# mogul-app

Scaffolding for a new Meteor Mogul app.

## Usage

1. Fork repository.
1. Clone.
1. Develop.

After you have forked to a repository you control, you can clone and run your app with the following commands:

```
$ git clone https://github.com/<path>/<to>/<your-repo.git>
$ cd <your-repo>
$ meteor npm install
$ meteor
```

If you see an error message that says:

```
 (STDERR) Error: The @babel/runtime npm package could not be found in your node_modules
 (STDERR) directory. Please run the following command to install it:
 (STDERR)
 (STDERR)   meteor npm install --save @babel/runtime
```

use Ctrl-C to quit, then run the following commands:

```
$ meteor npm install --save @babel/runtime
$ meteor
```
