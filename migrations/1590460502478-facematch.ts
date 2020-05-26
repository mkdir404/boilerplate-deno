import { Schema } from "https://deno.land/x/nessie/mod.ts";

export const up = (schema: Schema): void => {
    schema.create("facematch",(table)=>{
        table.id();        
        table.string("frameTimeStamp",100).nullable();
        table.string("personId",200).nullable();
        table.string("personName",200).nullable();//PersonNa me
        table.text("faceVectorDistance").nullable();//FaceVectorDistance
        table.string("matchConfidence",200).nullable();//MatchConfidence
        table.string("cameraName",200).nullable();//CameraName
        table.string("notificationType",200).nullable();//NotificationType
        table.text("landmarks").nullable(); //landmarks //object
        table.text("imgFace").nullable(); // Data 
    })
};

export const down = (schema: Schema): void => {
    schema.drop("facematch")
;}
