import { URL } from "url";

const myUrl = new URL('https://site.com/products?id=15&type=book&lang=en');

console.log(`ID: ${myUrl.searchParams.get("id")}`);
console.log(`Type: ${myUrl.searchParams.get("type")}`);
console.log(`Language: ${myUrl.searchParams.get("lang")}`);
