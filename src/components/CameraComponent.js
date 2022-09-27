import React, { useState, Fragment, useContext } from "react";
import ReactCrop from "react-image-crop";
import { FaCamera } from "react-icons/fa";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import CameraSave from "../pages/Doctor/camera/CameraSave/CameraSave";
import GlobalStorage from "../Storage/ContextProvider";
import './CameraComponent.css';
import { FiRotateCw, FiRotateCcw } from "react-icons/fi";
import { GrZoomIn, GrZoomOut } from "react-icons/gr";
import { BiZoomIn,BiZoomOut } from "react-icons/bi";


function CameraComponent() {
  const [playing, setPlaying] = useState(false);
  const { imgPath, setImgPath } = useContext(GlobalStorage);
  const [isCropping, setIsCropping] = useState(false);
  const [newImgPathBase64, setNewImgPathBase64] = useState("");
  const [crop, setCrop] = useState({ width: 300, height: 400 });
  const [horizontaloffset, setHorizontaloffset] = useState(0);
  const { saveImage, setSaveImage } = useContext(GlobalStorage);

  const [anti, setAnti] = useState(0);
  const [scaleId, setScale] = useState(1);

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
        video: { width: 900 },
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

    // setSaveImage(true)
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
        console.log("BLOB", blob);
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
  console.log("New Image", newImgPathBase64);
  const handleAntiClkwise = () => {
    
   setAnti(anti-90)
  }

  const handleClkwise = () => {
    
   setAnti(anti+90)
  }

  const handleZoomIn = () => {
    
    // setCrop(scaleId+0.4)
    setScale(scaleId+0.2)
   }

   const handleZoomOut = () => {
    
    // setCrop(scaleId+0.4)
    setScale(scaleId-0.2)
   }

   console.log(scaleId);

  return (
    <>

      <div className="container-fluid">
        <div className="row mt-4">
          {(imgPath && (
            <div className="col-12 text-center CameraClick">
              <img style={handleZoomIn || handleZoomOut ? {transform: `scale(${scaleId})`}: {transform: `rotate(${anti}deg)`}} src={imgPath} height={HEIGHT} />
            </div>
          )) || (
              <div className="col-12 text-center">
                {playing && (
                  <div className="cameraMargin"
                    style={{
                      border: "4px solid #185EB6",
                      position: "absolute",
                      height: HEIGHT,
                      width: WIDTH,
                      left: horizontaloffset,
                      right: 0,
                      boxShadow: "1000px 1000px 1000px 1000px rgba(255, 255, 255, 0.304)",
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
                  <div style={{ position: 'relative' }}>
                    <button style={{
                      border: 'none',
                      outline: 'none',
                      background: '#185EB6',
                      width: '180px',
                      height: '35px',
                      borderRadius: '5px',
                      color: '#FFFFFF',
                      fontFamily: 'poppins-medium',


                    }}
                      onClick={captureVideo}>
                      <FaCamera size="22px" className="me-3" />Capture
                    </button>
                    <button style={{
                      border: 'none',
                      outline: 'none',
                      background: '#185EB6',
                      width: '40px',
                      height: '35px',
                      borderRadius: '5px',
                      color: '#FFFFFF',
                      fontFamily: 'poppins-medium',
                    }}
                      className="ms-3"
                      onClick={handleMoveBoxLeft}>
                      <BsArrowLeftCircleFill size="21px" />
                    </button>
                    <button style={{
                      border: 'none',
                      outline: 'none',
                      background: '#185EB6',
                      width: '40px',
                      height: '35px',
                      borderRadius: '5px',
                      color: '#FFFFFF',
                      fontFamily: 'poppins-medium',
                    }} className="ms-2" onClick={handleMoveBoxRight}>
                      <BsArrowRightCircleFill size="21px" />
                    </button>
                  </div>
                </>
              )}
            {!playing && !!imgPath && (
              <>
              <div className="captureImageButton">
                <button className="rotateRight"  onClick={handleAntiClkwise}>
                   < FiRotateCcw size="20px" />
                </button>

                <button className="rotateLeft" onClick={handleClkwise}>
                 <FiRotateCw size="20px" />
                </button>

                <button className="zoomIn" onClick={handleZoomIn}>
                  <BiZoomIn size="26px" />
                </button>

                <button className="ZoomOut" onClick={handleZoomOut}>
                  <BiZoomOut color="#185EB6" size="26px" />
                </button>
              </div>

                {/* <button
                  className="btn btn-warning ml-2"
                  onClick={() => setIsCropping(true)}
                >
                  Crop
                </button>


                <a className="btn btn-info mt-2" download="Image.png" href={imgPath} role="button">Download</a> */}
              </>


            )}
          </div>
        </div>

      </div>



      {/* {saveImage && (
      <CameraSave />
    )} */}
    </>
  );
}

export default CameraComponent;