function getData(){
	var dataAMZ = {
		B008DBRFBK: {US: "https://amzn.to/37FAcSa", CA: "", UK: ""},
		B00X7R1FZ2: {US: "https://amzn.to/2N9Wxy3", CA: "", UK: ""},
		B003UI8B2S: {US: "https://amzn.to/2CcjaiR", CA: "", UK: ""},
		B00LPD9BDI: {US: "https://amzn.to/30MH1jA", CA: "", UK: ""},
		B06X6MLP5G: {US: "https://amzn.to/3dhMXDI", CA: "", UK: ""},
		B07PW66ZSN: {US: "https://amzn.to/3hE0BED", CA: "", UK: ""},
		B07MXDRTKJ: {US: "https://amzn.to/2YOLZtg", CA: "", UK: ""},
		B07Q55RYK8: {US: "https://amzn.to/3ddc22z", CA: "", UK: ""},
		B07NWBXRNF: {US: "https://amzn.to/37Jvfbi", CA: "", UK: ""},
		B074C62867: {US: "https://amzn.to/2YcTVWb", CA: "", UK: ""},
		B01IRMBG7I: {US: "https://amzn.to/37HtlHR", CA: "", UK: ""},
		B07LGDYV3C: {US: "https://amzn.to/2Cmnv3e", CA: "", UK: ""},
		B06Y28L3S1: {US: "https://amzn.to/3115phD", CA: "", UK: ""},
		B07HVSR8RF: {US: "https://amzn.to/2YOdOSz", CA: "", UK: ""},
		B01KIMOEW4: {US: "https://amzn.to/2BmNW8e", CA: "", UK: ""},
		B073WZ42XD: {US: "https://amzn.to/3hH8mcM", CA: "", UK: ""},
		B01MAVR8UW: {US: "https://amzn.to/2YMrYUj", CA: "", UK: ""},
		B00H3RI32U: {US: "https://amzn.to/3eguDMC", CA: "", UK: ""},
		B00A39FSAK: {US: "https://amzn.to/2BhMHaG", CA: "", UK: ""},
		B012VL5TB0: {US: "https://amzn.to/37LNjkP", CA: "", UK: ""},
		B003YJAZZ4: {US: "https://amzn.to/2Yci5QP", CA: "", UK: ""},
		B07QMRY141: {US: "https://amzn.to/2YHrMpo", CA: "", UK: ""},
		B07RMZV7W4: {US: "https://amzn.to/3dcISRm", CA: "", UK: ""},
		B01D3FOD0Q: {US: "https://amzn.to/3efoWP4", CA: "", UK: ""},
		B00K0NMFX2: {US: "https://amzn.to/3deJbe8", CA: "", UK: ""},
		B01C6AASW6: {US: "https://amzn.to/3fGKVid", CA: "", UK: ""},
		B07TS69X9J: {US: "https://amzn.to/3hDgBqB", CA: "", UK: ""},
		B083G9WVNC: {US: "https://amzn.to/2AIQeyS", CA: "", UK: ""},
		B01ALBMIEI: {US: "https://amzn.to/3hDejYj", CA: "", UK: ""},
		B07BD2G4TY: {US: "https://amzn.to/2APKiUH", CA: "", UK: ""},
		B07B94ZR74: {US: "https://amzn.to/2UWcoEC", CA: "", UK: ""},
		B00NH9WEUA: {US: "https://amzn.to/3d8P2ld", CA: "", UK: ""},
		B002KV1MJU: {US: "https://amzn.to/2YSeqGK", CA: "", UK: ""},
		B00UWP07LK: {US: "https://amzn.to/3d8P4tl", CA: "", UK: ""},
		B078MGY2CS: {US: "https://amzn.to/2Z3HY4H", CA: "", UK: ""},
		B07FPW5WXX: {US: "https://amzn.to/3deHI7I", CA: "", UK: ""},
		B07CVB53XY: {US: "https://amzn.to/3hGevWR", CA: "", UK: ""},
		B07CV9YWXZ: {US: "https://amzn.to/2APSELQ", CA: "", UK: ""},
		B07NHVFWCQ: {US: "https://amzn.to/3hJXgUn", CA: "", UK: ""},
		B016PXH9R2: {US: "https://amzn.to/2ABwjlq", CA: "", UK: ""},
		B01N5DCP2G: {US: "https://amzn.to/30VpKVh", CA: "", UK: ""},
		B003QCI4GG: {US: "https://amzn.to/3hGBj8Q", CA: "", UK: ""},
		B0028AYQDC: {US: "https://amzn.to/30QiREH", CA: "", UK: ""},
		B00HHO0IEU: {US: "https://amzn.to/37Jhk50", CA: "", UK: ""},
		B004918MO2: {US: "https://amzn.to/30Q2N5R", CA: "", UK: ""},
		B01CA4PRBA: {US: "https://amzn.to/3ed6iHB", CA: "", UK: ""},
		B073BLHCND: {US: "https://amzn.to/37Iofeq", CA: "", UK: ""},
		B002W87P9C: {US: "https://amzn.to/2YddGxa", CA: "", UK: ""},
		B00Q8M0NWE: {US: "https://amzn.to/3hF0EQn", CA: "", UK: ""},
		B00CPGMUXW: {US: "https://amzn.to/2YKcGQ1", CA: "", UK: ""},
		B018S68U40: {US: "https://amzn.to/2Y8qpB8", CA: "", UK: ""},
		B07NBKGNJ2: {US: "https://amzn.to/3hD66U0", CA: "", UK: ""},
		B07HKXVQYC: {US: "https://amzn.to/2NcPoNm", CA: "", UK: ""},
		B00LIAP2ZY: {US: "https://amzn.to/2UYR9Sr", CA: "", UK: ""},
		B00LS36OGC: {US: "https://amzn.to/2UPLLBd", CA: "", UK: ""},
		B01ICBLBL0: {US: "https://amzn.to/37ETuXU", CA: "", UK: ""},
		B075XQRXCF: {US: "https://amzn.to/2NaOalu", CA: "", UK: ""},
		B00V3X2P3S: {US: "https://amzn.to/2NaSWj1", CA: "", UK: ""},
		B007WA1ZG4: {US: "https://amzn.to/37HtD1J", CA: "", UK: ""},
		B002VWK1TA: {US: "https://amzn.to/3dex5lB", CA: "", UK: ""},
		B01M0I4KOZ: {US: "https://amzn.to/3hB9RJA", CA: "", UK: ""},
		B07RCL6V7R: {US: "https://amzn.to/3djNyVj", CA: "", UK: ""},
		B01DTYAZO4: {US: "https://amzn.to/3fxnJ5V", CA: "", UK: ""},
		B002LH47PY: {US: "https://amzn.to/30Y5OkV", CA: "", UK: ""},
		B000BQMV0A: {US: "https://amzn.to/3hEO7MX", CA: "", UK: ""},
		B000BQRBB4: {US: "https://amzn.to/3defXfI", CA: "", UK: ""},
		B0725VMPYD: {US: "https://amzn.to/2ALY4aR", CA: "", UK: ""},
		B07TDP2MMQ: {US: "https://amzn.to/37DNwGE", CA: "", UK: ""},
		B0751KDVTP: {US: "https://amzn.to/37INIo0", CA: "", UK: ""},
		B011LS47SA: {US: "https://amzn.to/37JfRvw", CA: "", UK: ""},
		B06WP2CLYY: {US: "https://amzn.to/2YJ14g4", CA: "", UK: ""},
		B01M0AGJIQ: {US: "https://amzn.to/2YcQvmo", CA: "", UK: ""},
		B079QYYGF1: {US: "https://amzn.to/3efN2ce", CA: "", UK: ""},
		B00USZPVXI: {US: "https://amzn.to/2YdRH9i", CA: "", UK: ""},
		B074GB37V8: {US: "https://amzn.to/2zHNjFV", CA: "", UK: ""},
		B06XRT2B3P: {US: "https://amzn.to/2ADbkP9", CA: "", UK: ""},
		B07CNH8PL8: {US: "https://amzn.to/2N97L5S", CA: "", UK: ""},
		B000P17NXQ: {US: "https://amzn.to/3ebmol5", CA: "", UK: ""},
		B01I46VPNC: {US: "https://amzn.to/2UXnrNE", CA: "", UK: ""},
		B074Y45CSY: {US: "https://amzn.to/3hAt5zf", CA: "", UK: ""},
		B007L7JBN2: {US: "https://amzn.to/2Y9xrW9", CA: "", UK: ""},
		B0791BN8MR: {US: "https://amzn.to/2Ydz1GB", CA: "", UK: ""},
		B004GXA8QI: {US: "https://amzn.to/3fAfdTx", CA: "", UK: ""},
		B000LXQVA4: {US: "https://amzn.to/2UUUuSt", CA: "", UK: ""},
		B07DN48VW8: {US: "https://amzn.to/2UTuxTB", CA: "", UK: ""},
		B00DR4F4T8: {US: "https://amzn.to/2YN4JcU", CA: "", UK: ""},
		B009K5QZQY: {US: "https://amzn.to/3hAwBJX", CA: "", UK: ""},
		B076QHF82W: {US: "https://amzn.to/30RPQsf", CA: "", UK: ""},
		B00JIURCTA: {US: "https://amzn.to/37SLd2V", CA: "", UK: ""},
		B000VSKAI8: {US: "https://amzn.to/2zJI5JO", CA: "", UK: ""},
		B07D8QGJ5V: {US: "https://amzn.to/2YeQYoh", CA: "", UK: ""},
		B01KUBW1XC: {US: "https://amzn.to/3hFoOu9", CA: "", UK: ""},
		B019OH9898: {US: "https://amzn.to/2V0eaV4", CA: "", UK: ""},
		B00BWYO53G: {US: "https://amzn.to/2Cdnhv5", CA: "", UK: ""},
		B07LB15VBT: {US: "https://amzn.to/2V0e1Rw", CA: "", UK: ""},
		B01LA3VHHU: {US: "https://amzn.to/3fFbMuL", CA: "", UK: ""},
		B0775YM1JC: {US: "https://amzn.to/2YJpbLL", CA: "", UK: ""},
		B073FMYZ3T: {US: "https://amzn.to/2BmNHdk", CA: "", UK: ""},
		B0000DF0RB: {US: "https://amzn.to/3hJgGZx", CA: "", UK: ""},
		B01D8DAYII: {US: "https://amzn.to/37J1mYu", CA: "", UK: ""},
		B008EYOPPU: {US: "https://amzn.to/2UT5csO", CA: "", UK: ""},
		B003R28HWQ: {US: "https://amzn.to/2YJXodV", CA: "", UK: ""},
		B07KL4QGSQ: {US: "https://amzn.to/2Blxl4E", CA: "", UK: ""},
		B073FTGBZY: {US: "https://amzn.to/2ANX8Tp", CA: "", UK: ""},
		B00ET5VMTU: {US: "https://amzn.to/3fBECMy", CA: "", UK: ""},
		B0001Q2VK0: {US: "https://amzn.to/3fr7De2", CA: "", UK: ""},
		B00TL72F2E: {US: "https://amzn.to/2UR9II8", CA: "", UK: ""},
		B00N9IG28O: {US: "https://amzn.to/30Xk4uc", CA: "", UK: ""},
		B00SZ3DHDQ: {US: "https://amzn.to/2Vd1SZE", CA: "", UK: ""},
		B01MUP6L1U: {US: "https://amzn.to/2UTfrgV", CA: "", UK: ""},
		B06XFVQFP9: {US: "https://amzn.to/2YfZ1RH", CA: "", UK: ""},
		B07QQW19BP: {US: "https://amzn.to/2N9VWwk", CA: "", UK: ""},
		B07S864GPW: {US: "https://amzn.to/2YeAuwv", CA: "", UK: ""},
		B07CWLRXBK: {US: "https://amzn.to/2UUWn1E", CA: "", UK: ""},
		B002635ODW: {US: "https://amzn.to/2UUWUAv", CA: "", UK: ""},
		B016J1ICDU: {US: "https://amzn.to/2Aau5sU", CA: "", UK: ""},
		B000MDHH06: {US: "https://amzn.to/2YB4pix", CA: "", UK: ""},
		B078W54RDC: {US: "https://amzn.to/2YBrstF", CA: "", UK: ""},
		B00BTKAPUU: {US: "https://amzn.to/2NyHUUY", CA: "", UK: ""},
		B07SFJXLYW: {US: "https://amzn.to/384Cp9U", CA: "", UK: ""},
		B01D3FOIR4: {US: "https://amzn.to/3eEbW5x", CA: "", UK: ""},
		B07ZSD95N1: {US: "https://amzn.to/2NzFB48", CA: "", UK: ""},
		B01LWA8J37: {US: "https://amzn.to/3dBa6RS", CA: "", UK: ""},
		B07QGS69WY: {US: "https://amzn.to/3dL1Mz7", CA: "", UK: ""},
		ASIN: {US: "", CA: "", UK: ""},
		ASIN: {US: "", CA: "", UK: ""}
	}
	//END
	return dataAMZ;
}
