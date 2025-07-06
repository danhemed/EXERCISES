import {URL} from "url";

const myUrl = new URL('http://localhost:3000/users/list?role=admin&active=true#top');
console.log(`hostName: ${myUrl.hostname}`);
console.log(`pathName: ${myUrl.pathname}`);
console.log(`protocol: ${myUrl.protocol}`);
console.log(`query: ${myUrl.searchParams}`);
console.log(`hash: ${myUrl.hash}`);
