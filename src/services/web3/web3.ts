import { toResult } from "@/utils";
import { ethers } from "ethers";
import ABI from "./abi.json";
import { Contract } from "ethers";
import { Transaction } from "ethers";

const CONTRACT__ADDRESS = `${process.env.CONTRACT_ADDRESS}`;
const NFT_PRICE = ethers.parseEther(`${process.env.NFT_PRICE}`);
const CHAIN_ID = process.env.CHAIN_ID!;

function getShortErrorMessage(error: any) {
  return error.shortMessage;
}

function getProvider(): ethers.BrowserProvider {
  if (!window.ethereum) {
    throw new Error("No MetaMask found");
  }
  return new ethers.BrowserProvider(window.ethereum);
}

// function getContract(account?: string, web3Instance?: ethers.BrowserProvider) {
//   let web3 = web3Instance ? web3Instance : getProvider();

//   return new web3.eth.Contract(ABI, CONTRACT__ADDRESS, {
//     from: account,
//   });
// }

export async function authenticate(): Promise<string> {
  const provider = getProvider();

  const [accountsError, accounts] = await toResult(
    provider.send("eth_requestAccounts", []) as Promise<string[]>
  );
  if (accountsError) {
    throw new Error(getShortErrorMessage(accountsError));
  }
  if (!accounts || !accounts.length) {
    throw new Error("Wallet not permitted!");
  }

  const [switchError] = await toResult(
    provider.send("wallet_switchEthereumChain", [
      {
        chainId: ethers.toBeHex(+CHAIN_ID),
      },
    ])
  );

  if (switchError) {
    throw new Error(getShortErrorMessage(switchError));
  }

  return accounts[0];
}

export async function mint(quantity: number): Promise<string | null> {
  const provider = getProvider();
  const contract = new ethers.Contract(CONTRACT__ADDRESS, ABI, provider);
  const [signerError, signer] = await toResult(provider.getSigner());

  if (signerError) {
    throw new Error(getShortErrorMessage(signerError));
  }
  const instance = contract.connect(signer) as Contract;

  const [txError, tx] = await toResult(
    instance.mint(quantity, {
      value: NFT_PRICE * ethers.toBigInt(quantity),
    }) as Promise<Transaction>
  );
  if (txError) {
    throw new Error(getShortErrorMessage(txError));
  }

  return tx.hash;
}
