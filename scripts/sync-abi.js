const fs = require('fs');
const path = require('path');

const contractName = 'ECommerce'; // <-- Asegúrate que coincide con el nombre real del contrato
const buildPath = path.resolve(__dirname, '..', 'build', 'contracts', `${contractName}.json`);
const frontendPath = path.resolve(__dirname, '..', 'frontend', 'contract-config.js');

const contract = JSON.parse(fs.readFileSync(buildPath, 'utf8'));
const abi = contract.abi;
const address = contract.networks && Object.values(contract.networks)[0]?.address;

if (!address) {
  console.error("❌ Dirección del contrato no encontrada. ¿Ya ejecutaste la migración?");
  process.exit(1);
}

const config = `
export const contractABI = ${JSON.stringify(abi, null, 2)};
export const contractAddress = "${address}";
`;

fs.writeFileSync(frontendPath, config);
console.log("✅ ABI y dirección sincronizados con frontend");
