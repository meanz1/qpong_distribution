import React from "react";
import "./index.css";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";

function CodePage() {
  const history = useHistory();
  return (
    <div>
      <div id="title">Qpong</div>
      <div id="input_sec">
        <div id="input_text">배송 조회 코드를 입력하세요</div>
        <div id="input_code">
          <Input
            id="code"
            placeholder=" 여기에 입력해주세요"
            bordered={false}
            style={{ width: 270, height: 40, fontSize: 20 }}
          />
        </div>
      </div>
      <button
        id="btn_check"
        onClick={function () {
          var value = document.getElementById("code").value;
          history.push("/info" + value);
        }}
      >
        확인
      </button>
      <img id="truck" src="image/qpong_bk_appvr.png" />
    </div>
  );
}

export default CodePage;
