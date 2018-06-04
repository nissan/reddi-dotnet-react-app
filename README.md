# reddi-dotnet-react-app
This template packs *alot* of modules in together, and tweaks the configuration so that they work well with each other, which doesn't happen automatically if you just `yarn add` each one. The packages included are:
1. .NET Core 2.1 Web App (API/back-end)
1. React (front-end)
2. React Router (routing)
3. Emotion (for enabling testable styled components while keeping close to CSS notation)
3. Storybook (visual interaction design)
4. Jest (TDD and RDD (readme driven development))
5. Enzyme (visual behavior testing)

Specifically I added the packages that I believe make better rapid prototyping and testing possible when discovering *how* an application should behave for the target user and there is a lot of volatility in the expected front-end behaviour as requirements change or adjust based on feedback received from demoing the actual application interactions.

The template

# Requirements
1. [ASP.Net Core 2.1 SDK](https://www.microsoft.com/net/download) installed
2. [Node.js](https://nodejs.org/en) and the [create-react-app](https://github.com/facebook/create-react-app) generator
3. A code editor. For this project I used [Visual Studio Code](https://code.visualstudio.com) but any will do
4. [Optional] [Fira Code](https://github.com/tonsky/FiraCode) font which works nicely if you [enable ligatures in VSCode](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)

# Quick setup of requirements
You can quickly setup the requirements by running the 
```
setup-prerequisites.sh
``` 
for Mac or 
```
setup-prerequisites.ps1
``` 
on Windows in an Administrator PowerShell and that will download and install requirements for you, as well as create the skeleton application with the needed packages added. 

There are a series of [gist files](https://gist.github.com/nissan/0b49d7524f0729e48e4e436d57533883) that show off the individually configured or additional files that are different from the generated template.

Note: The *only* prompt you may get when running the `setup-prerequisite` script is at the point where **dotnet** tries to install the self-signed certificate to allow HTTPS connections when debugging the application locally.

If you'd like to copy my own VSCode customized settings as well in your editor, install the [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) plugin to VSCode and download my [cloudSettings gist](https://gist.github.com/nissan/1eebdf0c22e31598a8f279bb784f7eb8) as your own using `Settings Sync`.

## Getting started
Once the project is cloned, run
```
dotnet restore
```
and then
```
dotnet run
```
from within the SampleApp folder.

To run Storybook, run 
```
yarn run storybook
```
from within the ClientApp folder

To run Jest tests, run
```
yarn test
```
from within the ClientApp folder

Additional support tutorials.
