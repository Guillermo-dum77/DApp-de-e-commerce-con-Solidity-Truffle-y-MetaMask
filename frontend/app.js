
import { contractABI, contractAddress } from "./contract-config.js";

let web3;
let contract;
let userAccount;

// 🔗 Conexión con MetaMask
const connectBtn = document.getElementById("connect");
connectBtn.addEventListener("click", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    userAccount = accounts[0];
    contract = new web3.eth.Contract(contractABI, contractAddress);
    showToast("✅ Conectado: " + userAccount);
    loadProducts();
  } else {
    showToast("❌ MetaMask no está instalado", "bg-red-500");
  }
});

// ➕ Añadir producto
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();

  if (!name || !price) return showToast("❗ Completa los campos", "bg-yellow-500");
  if (!web3 || !web3.utils) return showToast("❗ Conéctate primero con MetaMask", "bg-yellow-500");

  const priceInWei = web3.utils.toWei(price, "ether");
  addBtn.disabled = true;
  addBtn.textContent = "Añadiendo...";

  try {
    await contract.methods.addProduct(name, priceInWei).send({ from: userAccount });
    showToast("✅ Producto añadido");
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    setTimeout(() => loadProducts(), 1500);
  } catch (err) {
    console.error("Error al añadir producto:", err);
    showToast("⚠️ Error al añadir producto", "bg-red-500");
  } finally {
    addBtn.disabled = false;
    addBtn.textContent = "Añadir";
  }
});

// 📦 Cargar productos
async function loadProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  try {
    const count = await contract.methods.productCount().call();
    console.log("Cantidad de productos:", count);

    for (let i = 1; i <= count; i++) {
      const p = await contract.methods.products(i).call();
      console.log(`Producto ${i}:`, p);

      const card = document.createElement("div");
      card.className =
        "bg-gradient-to-br from-purple-900 to-indigo-800 p-4 rounded-xl shadow text-white transition hover:scale-[1.02] duration-300";
      card.innerHTML = `
        <h3 class="text-lg font-bold mb-1">${p.name}</h3>
        <p class="text-sm">💰 <strong>${web3.utils.fromWei(p.price)} ETH</strong></p>
        <p class="text-sm mb-2">📦 Vendido: ${p.sold ? "✅ Sí" : "❌ No"}</p>
        ${!p.sold ? `<button onclick="buyProduct(${p.id}, '${p.price}')"
          class="mt-2 bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-white text-sm">
          🛒 Comprar
        </button>` : ""}
      `;
      list.appendChild(card);
    }
  } catch (err) {
    console.error("Error al cargar productos:", err);
    showToast("⚠️ Error al cargar productos", "bg-red-500");
  }
}

// 🛒 Comprar producto
async function buyProduct(id, price) {
  try {
    await contract.methods.buyProduct(id).send({ from: userAccount, value: price });
    showToast("✅ Producto comprado");
    loadProducts();
  } catch (err) {
    console.error(err);
    showToast("❌ Error al comprar", "bg-red-500");
  }
}

// 🔔 Toast visual
function showToast(message, bgColor = "bg-green-500") {
  const toast = document.getElementById("toast");
  toast.className = `fixed top-4 right-4 z-50 text-white px-4 py-2 rounded shadow-lg ${bgColor}`;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}
