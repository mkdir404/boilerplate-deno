# boilerplate-deno

### Installation

Create 

model/config.ts

```js
import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "95.216.37.253", 
    username: "vicidial",
    password: "vicidial", 
    db: "quickfacenats",
})

export default client;
```

Run 

```sh
  
  deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts init
  deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make facematch
  deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate
  deno run --allow-net server.ts 
```
