import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { addFaceMatch, getAllFaceMatch  } from "../models/facematch.ts"

const api  =  new Router();

api.get("/",(ctx)=>{
    return getAllFaceMatch().then(result=>{
        return result.rows;
    })
})

api.post("/",(ctx)=>{

    const faceMatchData = ctx.req.body.Results[0]    
        
    const body = {

        frameTimeStamp : faceMatchData.FrameTimestamp,
        personId : faceMatchData.PersonId,
        personName : faceMatchData.PersonName,
        faceVectorDistance : faceMatchData.FaceVectorDistance,
        matchConfidence : faceMatchData.MatchConfidence,
        cameraName : faceMatchData.CameraName,
        notificationType : faceMatchData.NotificationType,
        landmarks : JSON.stringify(faceMatchData.landmarks),
        imgFace : faceMatchData.Data    
    
    }

    return addFaceMatch(body).then(newFaceMatch => {
            ctx.res.setStatus(201);
            return newFaceMatch
    });
})

export default api;