import client from "./config.ts";
import Dex from "https://deno.land/x/dex/mod.ts";

const dex = Dex({client:"mysql"});

 
interface FaceMatch {
    id?: number,
    frameTimeStamp : string;
    personId : string;
    personName : string;
    faceVectorDistance : string;
    matchConfidence : string;
    cameraName : string;
    notificationType : string;
    landmarks : string;
    imgFace : string;
}

function addFaceMatch( facematch : FaceMatch ){
    console.log(facematch);
    const insertQuery = dex.queryBuilder().insert([facematch]).into("facematch").toString();
    console.log(insertQuery) 
    return client.execute(insertQuery).then(result => {
        const getQuery = dex.queryBuilder().select().from("facematch").where({
            id : result.lastInsertId
        }).toString();
        return client.execute(getQuery).then(result=> result.rows ? result.rows[0] : {} );
    });
}

function getAllFaceMatch(){
    const getQuery = dex.queryBuilder().select("*").from("facematch").toString();
    return client.execute(getQuery);
}

export {    
    addFaceMatch,
    getAllFaceMatch,
}