import React, { useState, Fragment } from "react";
import ReactCrop from "react-image-crop";

function CameraComponent() {
  const [playing, setPlaying] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const [isCropping, setIsCropping] = useState(false);
  const [newImgPathBase64, setNewImgPathBase64] = useState("");
  const [crop, setCrop] = useState({ width: 300, height: 400 });
  const [horizontaloffset, setHorizontaloffset] = useState(0);
  // const [rightoffset, setRightoffset] = useState(0);

  const HEIGHT = 500;
  const WIDTH = (HEIGHT / 4) * 3;

  const handleMoveBoxLeft = () => {
    setHorizontaloffset((prev) => prev - 20);
  };

  const handleMoveBoxRight = () => {
    setHorizontaloffset((prev) => prev + 20);
  };

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  const startVideo = (_) => {
    setIsCropping(false);
    setImgPath("");
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: { width: 1000 },
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = (_) => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  const captureVideo = (_) => {
    const canvas = document.createElement("CANVAS");
    var video = document.getElementsByClassName("app__videoFeed")[0];
    canvas.height = video.videoHeight;
    canvas.width = (video.videoHeight / 4) * 3;
    canvas
      .getContext("2d")
      .drawImage(
        video,
        (video.videoWidth + horizontaloffset + 15 - (video.videoHeight / 4) * 3) / 2,
        0,
        (video.videoHeight / 4) * 3,
        video.videoHeight,
        0,
        0,
        (video.videoHeight / 4) * 3,
        video.videoHeight
      );
    canvas.toBlob(
      (blob) => {
        stopVideo();
        setImgPath(URL.createObjectURL(blob));
      },
      "image/jpeg",
      0.95
    );
  };

  const onCropChange = (crop) => {
    const canvas = document.createElement("canvas");
    const image = document.createElement("img");
    image.src = imgPath;
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    setNewImgPathBase64(canvas.toDataURL("image/jpeg"));
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {(imgPath && (
          <div className="col-12 text-center">
            <img src={imgPath} height={HEIGHT} />
          </div>
        )) || (
          <div className="col-12 text-center">
            {playing && (
              <div className="cameraMargin"
                style={{
                  border: "0.5px solid black",
                  position: "absolute",
                  height: HEIGHT,
                  width: WIDTH,
                  left: horizontaloffset,
                  right: 0,
                  boxShadow: "0px 0px 0px 2000px rgba(255, 255, 255, 0.504)",
                  marginLeft: "auto !important",
                  marginRight: "auto !important",
                }}
              ></div>
            )}

            <video
              style={{ border: "1px solid white" }}
              height={HEIGHT}
              muted
              autoPlay
              className="app__videoFeed"
            />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-12 text-center mt-4">
          {(!playing && (
            <button className="btn btn-primary" onClick={startVideo}>
              Start
            </button>
          )) || (
            <>
              <button className="btn btn-success" onClick={captureVideo}>
                Capture
              </button>
              <button  className="btn btn-success" onClick={handleMoveBoxLeft}>
                Move Left
              </button>
              <button  className="btn btn-success" onClick={handleMoveBoxRight}>
                Move Right
              </button>
            </>
          )}
          {!playing && !!imgPath && (
            <button
              className="btn btn-warning ml-2"
              onClick={() => setIsCropping(true)}
            >
              Crop
            </button>
          )}
        </div>
      </div>
      {isCropping && (
        <div className="row">
          <div className="col-12 text-center">
            <hr />
            <h4 className="display-4">Crop your image below!</h4>
            <hr />
          </div>
          <div className="col-5 text-center">
            <ReactCrop
              src={imgPath}
              crop={crop}
              ruleOfThirds
              onComplete={onCropChange}
              onChange={(newCrop) => setCrop(newCrop)}
            />
          </div>
          <div className="col-2 text-center" style={{ paddingTop: "100px" }}>
            <i
              className="bi bi-arrow-right-square"
              style={{ fontSize: "4rem" }}
            ></i>
          </div>
          <div className="col-5 text-center">
            <div>
              <img src={newImgPathBase64} />
            </div>
            <div>
              <a
                className="btn btn-info mt-2"
                download="Image.png"
                href={newImgPathBase64}
                role="button"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraComponent;