export const TORNADO_PROXY_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tornadoTrees",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_governance",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "contract ITornadoInstance",
						"name": "addr",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "bool",
								"name": "isERC20",
								"type": "bool"
							},
							{
								"internalType": "contract IERC20",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "enum TornadoProxy.InstanceState",
								"name": "state",
								"type": "uint8"
							}
						],
						"internalType": "struct TornadoProxy.Instance",
						"name": "instance",
						"type": "tuple"
					}
				],
				"internalType": "struct TornadoProxy.Tornado[]",
				"name": "_instances",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "encryptedNote",
				"type": "bytes"
			}
		],
		"name": "EncryptedNote",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract ITornadoInstance",
				"name": "instance",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum TornadoProxy.InstanceState",
				"name": "state",
				"type": "uint8"
			}
		],
		"name": "InstanceStateUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract ITornadoTrees",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "TornadoTreesUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes[]",
				"name": "_encryptedNotes",
				"type": "bytes[]"
			}
		],
		"name": "backupNotes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ITornadoInstance",
				"name": "_tornado",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_commitment",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "_encryptedNote",
				"type": "bytes"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "governance",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ITornadoInstance",
				"name": "",
				"type": "address"
			}
		],
		"name": "instances",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isERC20",
				"type": "bool"
			},
			{
				"internalType": "contract IERC20",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "enum TornadoProxy.InstanceState",
				"name": "state",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "rescueTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ITornadoTrees",
				"name": "_tornadoTrees",
				"type": "address"
			}
		],
		"name": "setTornadoTreesContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tornadoTrees",
		"outputs": [
			{
				"internalType": "contract ITornadoTrees",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "contract ITornadoInstance",
						"name": "addr",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "bool",
								"name": "isERC20",
								"type": "bool"
							},
							{
								"internalType": "contract IERC20",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "enum TornadoProxy.InstanceState",
								"name": "state",
								"type": "uint8"
							}
						],
						"internalType": "struct TornadoProxy.Instance",
						"name": "instance",
						"type": "tuple"
					}
				],
				"internalType": "struct TornadoProxy.Tornado",
				"name": "_tornado",
				"type": "tuple"
			}
		],
		"name": "updateInstance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ITornadoInstance",
				"name": "_tornado",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "_proof",
				"type": "bytes"
			},
			{
				"internalType": "bytes32",
				"name": "_root",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_nullifierHash",
				"type": "bytes32"
			},
			{
				"internalType": "address payable",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_relayer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_refund",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

export const TORNADO_PROXY_DEPOSIT_INPUT_PARAMETERS = [
	{
		"internalType": "contract ITornadoInstance",
		"name": "_tornado",
		"type": "address"
	},
	{
		"internalType": "bytes32",
		"name": "_commitment",
		"type": "bytes32"
	},
	{
		"internalType": "bytes",
		"name": "_encryptedNote",
		"type": "bytes"
	}
]

export const TORNADO_PROXY_WITHDRAW_INPUT_PARAMETERS =  [
	{
		"internalType": "contract ITornadoInstance",
		"name": "_tornado",
		"type": "address"
	},
	{
		"internalType": "bytes",
		"name": "_proof",
		"type": "bytes"
	},
	{
		"internalType": "bytes32",
		"name": "_root",
		"type": "bytes32"
	},
	{
		"internalType": "bytes32",
		"name": "_nullifierHash",
		"type": "bytes32"
	},
	{
		"internalType": "address payable",
		"name": "_recipient",
		"type": "address"
	},
	{
		"internalType": "address payable",
		"name": "_relayer",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "_fee",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "_refund",
		"type": "uint256"
	}
]
