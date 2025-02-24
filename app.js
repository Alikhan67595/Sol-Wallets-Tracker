// Array of wallet objects with placeholders for links
const wallets = [
    { name: "Wallet 1", solscanLink: "https://solscan.io/account/5gPfrsK5KhaRWH8eDr2xyQgPRmw9nnQcNVxGFGCu9Kgc", gmgnLink: "https://gmgn.ai/sol/address/5gPfrsK5KhaRWH8eDr2xyQgPRmw9nnQcNVxGFGCu9Kgc" },
    { name: "Wallet 2", solscanLink: "https://solscan.io/account/5H3dukkrF5SGtUGE6Zmo4eNkWzdnVooGbLQe9jH7Dscb#portfolio", gmgnLink: "https://gmgn.ai/sol/address/5H3dukkrF5SGtUGE6Zmo4eNkWzdnVooGbLQe9jH7Dscb" },
    { name: "Wallet 3", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 4", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 5", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 7", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 8", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 9", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 10", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 11", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 12", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 13", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 14", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 15", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 16", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 17", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 18", solscanLink: "", gmgnLink: "" },
    { name: "Wallet 19", solscanLink: "", gmgnLink: "" },
];

// Function to create and append wallet cards
function populateWalletList() {
    const walletList = document.getElementById("wallet-list");
    walletList.innerHTML = ""; // Clear previous content

    wallets.forEach(wallet => {
        const card = document.createElement("div");
        card.classList.add("wallet-card");

        const walletName = document.createElement("p");
        walletName.textContent = wallet.name;

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const solscanButton = document.createElement("button");
        solscanButton.textContent = "Track on Solscan";
        solscanButton.addEventListener("click", () => {
            if (wallet.solscanLink) {
                window.open(wallet.solscanLink, "_blank");
            } else {
                alert("Solscan link not set for this wallet!");
            }
        });

        const gmgnButton = document.createElement("button");
        gmgnButton.textContent = "Track on gmgn.ai";
        gmgnButton.addEventListener("click", () => {
            if (wallet.gmgnLink) {
                window.open(wallet.gmgnLink, "_blank");
            } else {
                alert("gmgn.ai link not set for this wallet!");
            }
        });

        buttonContainer.appendChild(solscanButton);
        buttonContainer.appendChild(gmgnButton);

        card.appendChild(walletName);
        card.appendChild(buttonContainer);

        walletList.appendChild(card);
    });
}

// Populate wallet list on page load
document.addEventListener("DOMContentLoaded", populateWalletList);