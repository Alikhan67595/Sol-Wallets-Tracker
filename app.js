// Array of wallet objects with placeholders for links
const wallets = [
    { name: "Wallet 1", solscanLink: "https://solscan.io/account/4R2jyL4MC8g8K38LUCDb1xkLcvHnpYgbZxJttor3bsLv#balanceChanges", gmgnLink: "https://gmgn.ai/sol/address/4R2jyL4MC8g8K38LUCDb1xkLcvHnpYgbZxJttor3bsLv" },
    { name: "Wallet 2", solscanLink: "https://solscan.io/account/BmLvMRTVgnBoUcSD2ezVs99VVxj7pNBZwCNGahFNJM5P", gmgnLink: "https://gmgn.ai/sol/address/BmLvMRTVgnBoUcSD2ezVs99VVxj7pNBZwCNGahFNJM5P" },
    { name: "Wallet 3", solscanLink: "https://solscan.io/account/4UYoHdW3EEiQd13QJVV9f2bDVrZv2L2oW7trU5GGdcSv", gmgnLink: "https://gmgn.ai/sol/address/4UYoHdW3EEiQd13QJVV9f2bDVrZv2L2oW7trU5GGdcSv" },
    { name: "Wallet 4", solscanLink: "https://solscan.io/account/H3hkk4iFeoiLP1nXxPDA1QSdx6xzQPSSZ3VgdYCJXKBm", gmgnLink: "https://gmgn.ai/sol/address/H3hkk4iFeoiLP1nXxPDA1QSdx6xzQPSSZ3VgdYCJXKBm" },
    { name: "Wallet 5", solscanLink: "https://solscan.io/account/CawH4gnd8BjEHopowzn7HpACc5tjVPXvHVTU61oCB7VU", gmgnLink: "https://gmgn.ai/sol/address/CawH4gnd8BjEHopowzn7HpACc5tjVPXvHVTU61oCB7VU" },
    { name: "Wallet 7", solscanLink: "https://solscan.io/account/5ADprFZmjLJbSYP4eS6221Dfbmwbxh7SnKWFqEtZ7bwr", gmgnLink: "https://gmgn.ai/sol/address/5ADprFZmjLJbSYP4eS6221Dfbmwbxh7SnKWFqEtZ7bwr" },
    { name: "Wallet 8", solscanLink: "https://solscan.io/account/DqpFQxN7PEMAEAUg5QsF32FNBRv95KdwbzJtsN6BmUa6", gmgnLink: "https://www.gmgn.ai/sol/address/DqpFQxN7PEMAEAUg5QsF32FNBRv95KdwbzJtsN6BmUa6" },
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