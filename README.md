# BCRM Explorer

Simple, database-free Bitcoin RM explorer, via RPC. Built with Node.js, express, bootstrap-v4.

This tool is intended to be a simple, self-hosted explorer for Bitcoin RM, driven by RPC calls to your own bitcoinrmd node. This tool is easy to run but currently lacks features compared to database-backed explorers.

I built this tool because I wanted to use it myself. Whatever reasons one might have for running a full node (trustlessness, technical curiosity, supporting the network, etc) it's helpful to appreciate the "fullness" of your node. With this explorer, you can not only explore the blockchain (in the traditional sense of the term "explorer"), but also explore the functional capabilities of your own node.

# Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search supports transactions, blocks, addresses
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal
* Currently supports BCRM (support for any Bitcoin-RPC-protocol-compliant coin can be added easily)

# Getting started

The below instructions are geared toward BCRM, but can be adapted easily to other coins.

## Prerequisites

1. Install and run a full, archiving node. Ensure that your node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the Bitcoin RM network.

## Instructions

1. Clone this repo
2. `npm install` to install all required dependencies
3. Edit the "rpc" settings in [credentials.js](app/credentials.js) to target your node
4. Optional: Edit file [config.js](app/config.js)
5. `npm start` to start the local server
6. Visit http://127.0.0.1:3002/

## Run via Docker

1. `docker build -t bcrm-explorer .`
2. `docker run -p 3002:3002 -it bcrm-explorer`
