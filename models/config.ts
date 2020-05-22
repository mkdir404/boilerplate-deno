import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "95.216.37.253", 
    username: "vicidial",
    password: "vicidial", 
    db: "quickfacenats",
})

export default client;