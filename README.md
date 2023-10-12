
# Aladdin

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v6.14.17

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm start


## Languages & tools

### Templating

- [Ant Design](https://ant.design/components/overview/) for some structuring.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [axios](https://www.npmjs.com/package/axios) for handling api calls.
- [eslint](https://eslint.org/) for better code quality.
- [prettier](https://prettier.io/) for maintaining code quality in project.



## Notes
- Implemented a Company and People screens to show their relations using nodes and links.
- Implemented filter functionaly based on user types for both companies and people.
- Implemented search functionaly based on user and company names.
- Properly handle UI.
- Added ESLint and Stylelint for consistency and better code quality.

## Future Work
- We can add filter functionaly based multple attributes of companies and people.
- We can add relation for companies and people bases on other attributes.