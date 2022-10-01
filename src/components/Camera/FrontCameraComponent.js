import React, { useState, Fragment, useContext, useEffect } from "react";
import ReactCrop from "react-image-crop";
import { FaCamera } from "react-icons/fa";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import CameraSave from "../../pages/Doctor/camera/CameraSave/CameraSave";
import GlobalStorage from "../../Storage/ContextProvider";
import '../CameraComponent.css';
import { FiRotateCw, FiRotateCcw } from "react-icons/fi";
import { GrZoomIn, GrZoomOut } from "react-icons/gr";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import ButtonIcon from '../../assests/buttonIcon.png';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";





function FrontCameraComponent() {


  let navigate = useNavigate();
  const [playing, setPlaying] = useState(false);
  const { imgPath, setImgPath } = useContext(GlobalStorage);
  const [isCropping, setIsCropping] = useState(false);
  const [newImgPathBase64, setNewImgPathBase64] = useState("");
  const [crop, setCrop] = useState({ width: 300, height: 400 });
  const [horizontaloffset, setHorizontaloffset] = useState(0);
  const { saveImage, setSaveImage, step, setStep, point, setPoint } = useContext(GlobalStorage);
  const [finalrows, setFinalrows] = useState(null);
  const [istoggleon, setIstoggleon]  = useState(false);



  useEffect(() => {

    const noofcols = Array.apply(null, Array(Math.floor(375 / 10))).map(function () {
      return (
        <td style={{ width: '10px', height: '10px', border: '0.1px solid rgba(255,255,255,0.5)', backgroundColor: 'transparent' }}></td>
      )
    });

    const noofrows = Array.apply(null, Array(Math.floor(500 / 10))).map(() => {
      return (
        <tr style={{ borderCollapse: 'collapse' }}>
          {
            noofcols.map((x) => {
              return x;
            })
          }
        </tr>
      )
    });



    //console.log(noofcol, noofrow);
    console.log(noofrows);
    setFinalrows(noofrows);

  }, []);






  const [anti, setAnti] = useState(0);
  const [scaleId, setScale] = useState(1);
  // const [step, setStep] = useState(step);
  // const [rightoffset, setRightoffset] = useState(0);

  const HEIGHT = 500;
  const WIDTH = (HEIGHT / 4) * 3;

  const handleMoveBoxLeft = () => {

    if (horizontaloffset > -500) {
      setHorizontaloffset((prev) => prev - 20);
      console.log("Horizontal Offset", horizontaloffset);
    }


  };

  const handleMoveBoxRight = () => {

    if (horizontaloffset < 500) {

      setHorizontaloffset((prev) => prev + 20);
      console.log("Horizontal Offset", horizontaloffset);
    }



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
        (video.videoWidth + horizontaloffset + 25 - (video.videoHeight / 4) * 3) / 2,
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
        setImgPath(blob);
        console.log("BLOB", blob);
      },
      "image/jpeg",
      0.95
    );
  };




  const handleAntiClkwise = () => {
    setAnti(anti - 90)
  }
  const handleClkwise = () => {

    setAnti(anti + 90)
  }
  const handleZoomIn = () => {
    // setCrop(scaleId+0.4)
    setScale(scaleId + 0.2)
  }

  const handleZoomOut = () => {
    // setCrop(scaleId+0.4)
    setScale(scaleId - 0.2)
  }

  console.log(scaleId);

  const handleNext = () => {
    setPlaying(true)
    setImgPath("")
    setStep(step + 1)
  }

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', imgPath, "noName.png");

    axios({
      url: `http://18.237.160.150/api/patient/diagnosis/image/upload?id=52351173&tag=Front`,
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {

      setPoint({ ...point, front: response.data.message.s3_url })
      setImgPath("");
      navigate("/doctor/function");

    })
      .catch((error) => console.log(error));
  }

  console.log("POINT", point);


  return (
    <>

      <div className="container-fluid">
        <div className="row mt-4">
          {(imgPath && (
            <div className="col-12 text-center CameraClick">
              <img style={handleZoomIn || handleZoomOut ? { transform: `scale(${scaleId})` } : { transform: `rotate(${anti}deg)` }} src={URL.createObjectURL(imgPath)} height={HEIGHT} />
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
                  >


                    {istoggleon===true?(<table>
                      {
                        finalrows.map((x) => {
                          return (
                            x
                          )
                        })
                      }
                    </table>):null}

                    <div style={{
                      borderRight: "2px solid #185EB6",
                      height: '495px',
                      position: 'absolute',
                      right: '50%',
                      top: '0%'
                    }}></div>


                  </div>
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
              <button
                style={{
                  border: 'none',
                  outline: 'none',
                  background: '#185EB6',
                  width: '150px',
                  height: '35px',
                  borderRadius: '5px',
                  color: '#FFFFFF',
                  fontFamily: 'poppins-medium',
                }}
                onClick={startVideo}>
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
                    <label className="toggle">
                      <input className="toggle__checkbox" type="checkbox" value={istoggleon} onChange={()=>{setIstoggleon(!istoggleon)}}  />
                        <span className="toggle__switch"></span>
                        <span className="toggle__label">Grid</span>
                    </label>
                  </div>
                </>
              )}
            {!playing && !!imgPath && (
              <>
                <div className="captureImageButton">
                  <button className="rotateRight" onClick={handleAntiClkwise}>
                    <FiRotateCcw size="20px" />
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

                  <button className="nextScreen" onClick={handleNext}>
                    <IoIosArrowDroprightCircle color="#185EB6" size="25px" /> Next Image
                  </button>

                  <button className="nextScreen3" onClick={handleSubmit}>
                    <IoIosArrowDroprightCircle color="#185EB6" size="25px" /> Save Image
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

export default FrontCameraComponent;