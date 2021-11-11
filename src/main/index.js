import React from "react";
import "./index.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function MainPage() {
  const history = useHistory();
  return (
    <div>
      <div id="title">Qpong</div>
      <div id="sec">
        <div id="sec_1">안녕하세요 온라인 택배 운송장 서비스 Qpong 입니다</div>
        <div id="sec_2">
          Qpong은 분리수거가 어려운 기존 택배 운송장 대신 친환경 소재의
          운송장으로 대체했으며,
          <div></div>
          운송장으로 인해 쉽게 노출될 수 있는 개인 정보를 암호화하여 보호력을
          강화했습니다. 또한
          <div></div>
          택배원들의 과도한 업무량과 배송 오류 빈도를 줄이기 위해 택배 자동화
          로봇을 도입했습니다.
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
