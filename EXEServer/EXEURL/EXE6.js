import {URL} from "url";

const urlStr = new URL('https://app.com/search?query=node&sort=asc');

console.log(`${urlStr.protocol}//${urlStr.hostname}${urlStr.pathname}?${urlStr.searchParams}`);

urlStr.searchParams.set("sort", "desc");
urlStr.searchParams.append("page", "3");
urlStr.searchParams.delete("query");

console.log(`${urlStr.protocol}//${urlStr.hostname}${urlStr.pathname}?${urlStr.searchParams}`);