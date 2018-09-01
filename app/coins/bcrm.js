var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"Bitcoin RM",
	logoUrl:"/img/logo/bcrm.png",
	siteTitle:"Bitcoin RM Explorer",
	siteDescriptionHtml:"<b>BCRM Explorer</b>",
	nodeTitle:"Bitcoin RM node",
	nodeUrl:"https://www.bitcoinrm.org",
	demoSiteUrl: "https://explorer.bitcoinrm.org/",
	maxBlockWeight: 20000000,
	currencyUnits:[
		{
			name:"BCRM",
			multiplier:1,
			default:true,
			values:["", "bcrm", "BCRM"],
			decimalPlaces:8
		},
		{
			name:"mBCRM",
			multiplier:1000,
			values:["mbcrm"],
			decimalPlaces:5
		},
		{
			name:"bits",
			multiplier:1000000,
			values:["bits"],
			decimalPlaces:2
		},
		{
			name:"sat",
			multiplier:100000000,
			values:["sat", "satoshi"],
			decimalPlaces:0
		}
	],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	historicalData: [
	],
	blockRewardFunction:function(blockHeight) {
		var nSubsidy = new Decimal8(0);
		var BCRMHeightRegular = 21;
		var nSubsidyHalvingInterval = 1440000;

		if (blockHeight < BCRMHeightRegular) {
			if (blockHeight == 0) {
				nSubsidy = new Decimal8(0);
				return nSubsidy;
			}

			if (blockHeight == 1) {
				nSubsidy = new Decimal8(21000000);
				return nSubsidy;
			}

			if (blockHeight == 4 || blockHeight == 8 || blockHeight == 11 || blockHeight == 14 || blockHeight == 17) {
				nSubsidy = new Decimal8(60000);
				return nSubsidy;
			}

			nSubsidy = new Decimal8(50000);
			return nSubsidy;
		}

		var halvings = Math.floor((blockHeight - BCRMHeightRegular) / nSubsidyHalvingInterval);

		if (halvings >= 64) {
			nSubsidy = new Decimal8(0);
			return nSubsidy;
		}

		var pos = (blockHeight - BCRMHeightRegular) % nSubsidyHalvingInterval;
		var blockstep = 120000;
		var subsidy = [20, 30, 45, 100, 200, 400, 900, 950, 700, 500, 150, 80];
		var s = subsidy[Math.floor(pos/blockstep)];

		if (halvings > 0)
			for (var i = 0; i < halvings; i++)
				s /= 2;

		// After premine period, adjust subsidy as follows:
		// No subsidy if it is less than 1

		if (s < 1)
			nSubsidy = new Decimal8(0);
		else
			nSubsidy = new Decimal8(s); 

		return nSubsidy;
	},
};
