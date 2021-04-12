'use strict';
console.clear();

//initialization of module imports
const fs = require('fs');
const bencode = require('bencode');
const dgram = require('dgram');
const urlParser = require('url').parse;
const buffer = require('buffer').Buffer;


const decodeTorrent = bencode.decode(fs.readFileSync('./Smile.torrent'));

const url = urlParser(decodeTorrent.announce.toString('utf-8'));

const socket = dgram.createSocket('udp4');

const message = buffer.from('hello', 'utf-8');

socket.send(message, 0, message.length, url.port, url.host, () => { });

socket.on('message', message => {
    console.log('message is ' + message);
})