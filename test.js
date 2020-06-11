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
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key + "&productId=" + product)
    .then((resp) => resp.json())
    .then(function(data)
    {
        console.log(data)
        if (oper === 'BuyVolume') {
            setTimeout(function(){
                console.log("Getting Buy Volume")
                return JSON.stringify(data.product_info.quick_status.buyVolume)
              }, 1000);   
        }
        if (oper === 'SellVolume') {
            return data.product_info.quick_status.sellVolume
        }
        if (oper === 'BuyPrice') {
            return data.product_info.quick_status.buyPrice
        }
        if (oper === 'SellPrice') {
            return data.product_info.quick_status.sellPrice
        }
        if (oper === 'BuyOrders') {
            return data.product_info.quick_status.buyOrders
        }
        if (oper === 'SellOrders') {
            return data.product_info.quick_status.sellOrders
        }       
    });
    return
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
