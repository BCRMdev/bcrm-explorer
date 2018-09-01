var credentials = require("./credentials.js");

module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	demoSite: false,
	coin: "BCRM",

	rpcBlacklist:[
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"dumpprivkey",
		"dumpwallet",
		"setban",
		"clearbanned",
		"listbanned",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange",
		"verifychain",
		"pruneblockchain",
		"generate",
		"generatetoaddress",
		"prioritisetransaction",
		"submitblock",
		"sendrawtransaction",
		"preciousblock",
		"signmessage",
		"signrawtransaction",
		"fundrawtransaction",
		"getnewaddress",
		"getwalletinfo",
		"getbalance",
		"getunconfirmedbalance",
		"getrawchangeaddress",
		"getaccountaddress",
		"getaccount",
		"getreceivedbyaccount",
		"getreceivedbyaddress",
		"gettransaction",
		"importaddress",
		"importmulti",
		"importprivkey",
		"importpubkey",
		"keypoolrefill",
		"importprunedfunds",
		"listaccounts",
		"listreceivedbyaccount",
		"listreceivedbyaddress",
		"listaddressgroupings",
		"listunspent",
		"listsinceblock",
		"listtransactions",
		"lockunspent",
		"listlockunspent",
		"listwallets",
		"sendfrom",
		"sendmany",
		"sendtoaddress",
		"settxfee",
		"setaccount",
		"ping",
		"help"
	],

	site: {
		blockTxPageSize:20,
		browseBlocksPageSize:20
	},

	credentials: credentials,

	// Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
        // localhost in IPv4 is 127.0.0.1
        // localhost in IPv6 is ::1
        // localhost in IPv4 encapsulated in IPv6 is ::ffff:127.0.0.1
	ipWhitelistForRpcCommands:/^(127\.0\.0\.1)?(\:\:1)?(\:\:ffff\:127\.0\.0\.1)?$/,

	googleAnalyticsTrackingId:"",
	sentryUrl:"",

	donationAddresses:{
		coins:["BCRM"],
		"BCRM":{address:"3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe", urlPrefix:"bitcoin:"}
	},

	ipStackComApiAccessKey:""
};
