#!/bin/bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install wget watchman
brew cask install dotnet-sdk visual-studio-code nvm
brew tap caskroom/fonts
brew cask install font-fira-code
mkdir ~/.nvm
echo 'export NVM_DIR=~/.nvm' >> ~/.bash_profile
echo 'source $(brew --prefix nvm)/nvm.sh' >> ~/.bash_profile
nvm install 10.3.0
nvm use default
brew install yarn --without-node
yarn global add create-react-app @storybook/cli
cd sampleApp
dotnet new react
dotnet dev-certs https --trust
rm -rf -Path ClientApp -Force
create-react-app sampleapp
mv sampleapp ClientApp
cd ClientApp
yarn add react-router-dom prop-types emotion react-emotion
yarn add -D react-app-rewired babel-plugin-emotion react-test-renderer enzyme enzyme-adapter-react-16 @storybook/addon-storyshots expect storybook-addon-specifications
getstorybook 