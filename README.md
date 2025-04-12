# E-Trade DApp

Una aplicación descentralizada (DApp) de e-commerce que permite añadir y comprar productos utilizando MetaMask, Solidity y Truffle, desplegada en Ganache como red local.

## Herramientas utilizadas

- Solidity
- Truffle
- Ganache
- MetaMask
- Web3.js
- TailwindCSS
- HTML + JavaScript

## Instalación y ejecución local

### 1. Clona este repositorio
git clone https://github.com/Guillermo-dum77/DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask.git
cd DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask

### 2. Instala dependencias
npm install

### 3. Abre Ganache
Ejecuta Ganache para tener una red local en http://127.0.0.1:8545.

### 4. Compila y migra los contratos
truffle compile
truffle migrate --network development

### 5. Ejecuta el servidor local
npx live-server frontend

### 6. Conecta MetaMask
Importa una de las cuentas de Ganache a MetaMask (usando su clave privada).

Conéctate a la red local (http://127.0.0.1:8545 con Chain ID 1337).

Haz clic en “Conectar Wallet” desde la DApp.

Funcionalidades
Conexión automática a MetaMask

Añadir productos con nombre y precio en ETH

Visualizar productos disponibles

Comprar productos (interactuando con el contrato)
