# boilerplate-deno

### Installation

Create 

model/config.ts

```js
const client = await new Client().connect({
    hostname: "", 
    username: "",
    password: "", 
    db: "",
})
```

Run 

```sh
  
  deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts init
  deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make facematch
  deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate
  deno run --allow-net server.ts
  
};*/
