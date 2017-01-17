# Iniciando com React

Requisitos:

Node.js:
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - 
sudo apt-get install -y nodejs

Babel:
npm install --global babel-cli

Criando package.json:

cat << @@ > package.json
 {
   "name": "Starting_with_react",
   "version": "1.0.0",
   "title": "Starting Rith React"
 }
@@

npm install babel-preset-react --save-dev

Iniciar babel tradutor para js:
babel --presets react src --watch --out-dir js
