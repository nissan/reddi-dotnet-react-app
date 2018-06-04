Set-ExecutionPolicy Bypass -Scope Process -Force
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
RefreshEnv.cmd
choco install -y dotnetcore-sdk vscode nvm yarn firacode
RefreshEnv.cmd
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 
nvm install 10.3.0
nvm use default
yarn global add create-react-app @storybook/cli
mkdir sampleApp
Set-Location -Path sampleApp
dotnet new react
dotnet dev-certs https --trust
Remove-Item -Path ClientApp -Force -Recurse
create-react-app baseapp
Move-Item -Path baseapp -Destination ClientApp -Force
Set-Location -Path ClientApp
yarn add react-router-dom prop-types emotion react-emotion
yarn add -D react-app-rewired babel-plugin-emotion react-test-renderer enzyme enzyme-adapter-react-16 @storybook/addon-storyshots expect storybook-addon-specifications
getstorybook 
