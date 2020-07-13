class discordWrapper {
    getInfo() {
        return {
            "id": "DiscordJsWrapper",
            "name": "DiscordJsWrapper",
            "blocks": [{
                "opcode": "loginModule",
                "blockType": "reporter",
                "text": "Log into discord bot: key: [key] ",
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

    

        var js = document.createElement("script");

        js.type = "text/javascript";
        js.src = "https://pentbeear.github.io/discord.12.2.0.min.js";

        document.body.appendChild(js);

    var wait = ms => new Promise((r, j)=>setTimeout(r, ms))
    
    await wait(1000)
    console.log("Returning value! " + output);
    return output
    };
}

    
Scratch.extensions.register(new discordWrapper());
