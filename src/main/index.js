import React from "react";
import "./index.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function MainPage() {
  const history = useHistory();
  return (
    <div>
      <div id="tite">Qpong</div>
      <div id="sec">
        <div id="sec_1">
          안녕하세요<div></div>온라인 택배 운송장 서비스 Qpong 입니다
        </div>
        <div id="sec_2">
          신속정확하게 배송하고
          <div></div>
          안전하게 확인하고
          <div></div>
          똑! 떼서 버리고<div></div>Qpong은 환경, 안전 모두를 생각합니다
        </div>
      </div>

      <button
        id="btn_track"
        onClick={function () {
          history.push("/code");
        }}
      >
        택배 조회하기
      </button>
      <img id="truck" src="image/qpong_bk_appvr.png" />
    </div>
  );
}

export default MainPage;
