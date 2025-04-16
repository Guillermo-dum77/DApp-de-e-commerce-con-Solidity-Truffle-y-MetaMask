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

## Características
- Conexión automática a MetaMask
- Añadir productos con nombre y precio en ETH
- Visualizar productos disponibles
- Comprar productos (interactuando con el contrato)
- Validaciones para evitar compras duplicadas o sin fondos
- Interfaz moderna con TailwindCSS

---

## Requisitos previos

Antes de instalar el proyecto, asegúrate de tener lo siguiente:

- Node.js (v18.x recomendado)
- Ganache CLI o Ganache UI
- MetaMask (extensión del navegador)
- Truffle (`npm install -g truffle`)
- Git

---

## Instalación y ejecución local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Guillermo-dum77/DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask.git
cd DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Abrir Ganache
Ejecuta Ganache para tener una red local en `http://127.0.0.1:8545`.

### 4. Compilar y migrar los contratos
```bash
truffle compile
truffle migrate --network development
```

Esto desplegará el contrato en Ganache y generará el archivo `Ecommerce.json` en `build/contracts/`.

### 5. Sincronizar ABI y dirección
Ejecuta el script para generar `contract-config.js`:
```bash
node scripts/sync-abi.js
```

### 6. Ejecutar el servidor local
```bash
npx live-server frontend
```

### 7. Conectar MetaMask
- Importa una de las cuentas de Ganache a MetaMask (usando su clave privada).
- Conéctate a la red local (`http://127.0.0.1:8545`) con Chain ID `1337`.
- Haz clic en “Conectar Wallet” desde la DApp.

---

## Ejecutar pruebas
Puedes probar las funciones del contrato con:
```bash
truffle test
```

---
