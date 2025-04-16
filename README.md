# E-Trade DApp

**E-Trade DApp** es una aplicación descentralizada (DApp) desarrollada con Solidity, Truffle, JavaScript y TailwindCSS. Permite a los usuarios listar y comprar productos en la blockchain mediante MetaMask y Ganache.

Este README está orientado a la instalación de la DApp en un entorno local de PC con sistema operativo Windows.

---

## Características
- Conexión automática a MetaMask
- Añadir productos con nombre y precio en ETH
- Visualizar productos disponibles
- Comprar productos (interactuando con el contrato)
- Validaciones para evitar compras duplicadas o sin fondos
- Interfaz moderna con TailwindCSS

---

## Requisitos previos (PC)

Antes de instalar el proyecto en tu PC con Windows, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v18.x recomendado)
- [Ganache](https://trufflesuite.com/ganache/) (interfaz gráfica recomendada)
- [MetaMask](https://metamask.io/) (extensión para Chrome o Firefox)
- [Git](https://git-scm.com/)
- Truffle (instalar vía terminal):
  ```bash
  npm install -g truffle
  ```

También se recomienda tener instalado Visual Studio Code y la extensión **Live Server**.

---

## Instalación y ejecución local en PC

### 1. Clonar el repositorio
Abre una terminal (CMD, PowerShell o Git Bash) y ejecuta:
```bash
git clone https://github.com/Guillermo-dum77/DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask.git
cd DApp-de-e-commerce-con-Solidity-Truffle-y-MetaMask
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Abrir Ganache
1. Abre la aplicación Ganache (interfaz gráfica).
2. Crea un nuevo Workspace personalizado.
3. Asocia la ruta del proyecto.
4. Asegúrate de que Ganache esté corriendo en `http://127.0.0.1:8545`.

### 4. Compilar y migrar los contratos
En una nueva terminal dentro del proyecto:
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

### 6. Ejecutar el frontend con Live Server
Abre la carpeta `frontend` en Visual Studio Code. Luego:
- Haz clic derecho en `index.html`
- Selecciona “Open with Live Server”
- Se abrirá en tu navegador predeterminado

### 7. Conectar MetaMask
1. Abre MetaMask en Chrome o Firefox.
2. Importa una de las cuentas de Ganache usando la clave privada.
3. Añade una red personalizada:
   - Nombre: Ganache Local
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `1337` (o `5777` si Ganache lo indica)
4. Selecciona la cuenta y haz clic en “Conectar Wallet” desde la DApp.

---

## Ejecutar pruebas
Puedes probar las funciones del contrato con:
```bash
truffle test
```

---
