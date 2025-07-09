const obj = {
    name : "dan"
}

function isObj (obj) {
    const j = JSON.parse(obj);
    if (typeof j === "object"){
        console.log(`True`);
    } else {
        console.log(`False`);
    }
}

isObj("{'name' : 'dan'}");
