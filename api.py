import shutil
from fastapi import FastAPI, File, UploadFile
from FaceMesh import faceMesh
from AddGradCap import addGradCap


app = FastAPI()


@app.post("/api/uploader/")
async def create_upload_file(file: UploadFile = File(...)):
   with open("initialPhotoMesh.png", "wb") as buffer:
      shutil.copyfileobj(file.file, buffer)
   faceMesh("initialPhotoMesh.png")   
   return 


@app.post("/api/uploader/toca")
async def create_upload_file(file: UploadFile = File(...)):
   with open("initialPhotoGrad.png", "wb") as buffer:
      shutil.copyfileobj(file.file, buffer)
   addGradCap("initialPhotoGrad.png")   
   return 

 