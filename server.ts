import { Application, Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import api from "./api/facematch.ts";

const app = new Application({port:1337})

app.use("/api/facematch",api);
app.run();