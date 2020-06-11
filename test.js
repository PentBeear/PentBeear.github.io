class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGetInfo",
                "blockType": "reporter",
                "text": "GetBazaarItem: key: [key] product name: [product] select value: [oper]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "put ya key here"
                    },
                    "product": {
                        "type": "string",
                        "defaultValue": "INK_SACK:3"
                    },
                    "oper": {
                        "type": "string",
                        "menu": "selectvalue",
                        "defaultValue": "BuyVolume"
                    },
                }
            }],
            "menus": {
                selectvalue: this._formatMenu(['BuyVolume', 'SellVolume', 'BuyPrice', 'SellPrice', 'BuyOrders', 'SellOrders']),
            }
        };
    }
    jsonGetInfo ({key, product, oper}) {
    console.log(key);
    console.log(product);
    var output = "";
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key + "&productId=" + product)
    .then((resp) => resp.json())
    .then(function(data)
    {
        console.log(data)
        if (oper === 'BuyVolume') {
            console.log("Getting Buy Volume")
            output = JSON.stringify(data.product_info.quick_status.buyVolume)   
            console.log(output);  
            return output 
        }
        if (oper === 'SellVolume') {
            output = JSON.stringify(data.product_info.quick_status.sellVolume)  
            console.log(output);  
            return output
        }
        if (oper === 'BuyPrice') {
            output = JSON.stringify(data.product_info.quick_status.buyPrice)  
            console.log(output);
            return output      
        }
        if (oper === 'SellPrice') {
            output = JSON.stringify(data.product_info.quick_status.sellPrice) 
            console.log(output);   
            return output 
        }
        if (oper === 'BuyOrders') {
            output = JSON.stringify(data.product_info.quick_status.buyOrders)  
            console.log(output);   
            return output
        }
        if (oper === 'SellOrders') {
            output = JSON.stringify(data.product_info.quick_status.sellOrders)   
            console.log(output);  
            return output
        } 
        console.log("Returning value!" + output);     
        return output

    });
    };

    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }

}
Scratch.extensions.register(new hypixelWrapper());
