class discordWrapper {
    getInfo() {
        return {
            "id": "DiscordJsWrapper",
            "name": "DiscordJsWrapper",
            "blocks": [{
                "opcode": "loginModule",
                "blockType": "reporter",
                "text": "GetBazaarItem: key: [key] product name: [product] select value: [oper]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "put ya key here"
                    },
                }
            }],
        };
    }
   async loginModule ({key, product, oper}) {
    console.log(key);

    var output = "";

    <script type="text/javascript" src="https://pentbeear.github.io/discord.12.2.0.min.js"></script>

    var wait = ms => new Promise((r, j)=>setTimeout(r, ms))
    
    await wait(1000)
    console.log("Returning value! " + output);
    return output
    };
}

    
Scratch.extensions.register(new discordWrapper());
