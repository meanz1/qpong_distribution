import React from "react";
import "./index.css";
import { Collapse } from "antd";
import { useHistory, Link } from "react-router-dom";
const { Panel } = Collapse;
const text_product = `하이키 남녀공용 팀 코트 스니커즈 (240mm)`;
const sender_address = `(5050) 제주도 달리시 파도로8 A동`;
const sender_phone = `0520-1206`;
const sender_memo = `영수증 리뷰를 남기시면 할인쿠폰을 드립니다.`;
const receiver_address = `(5739) 강원도 러너시 하이로2 가동 110호`;
const receiver_phone = `5834-1518`;
const invoice_num = `789-3333-3333`;
const payment = `선불`;

function Info003() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <span id="banner">Qpong</span>
        <Link to="/">
          <img id="back_img" src="image/icon/home.png" />
        </Link>
      </div>
      <div id="content">
        <div id="delivery_info">
          <div class="info_list" id="info_product">
            <img src="/image/icon/box.png" />
            <span className="info_text">
              <h2>상품명</h2>

              <Collapse ghost>
                <Panel
                  header=" 하이키 남녀공용 팀 코트 스니커즈 (240mm)"
                  key="1"
                >
                  <p>상품 상세 : {text_product}</p>
                </Panel>
              </Collapse>
            </span>
          </div>
          <div class="info_list" id="info_send">
            <img src="/image/icon/sender.png" />
            <span className="info_text">
              <h2>발신인</h2>

              <Collapse ghost>
                <Panel header=" 이호영" key="2">
                  <p>주소 : {sender_address}</p>
                  <p>전화번호 : {sender_phone}</p>
                  <p>메모 : {sender_memo}</p>
                </Panel>
              </Collapse>
            </span>
          </div>
          <div class="info_list" id="info_receive">
            <img src="/image/icon/receiver.png" />
            <span className="info_text">
              <h2>수신인</h2>
              <Collapse ghost>
                <Panel header=" 지오근" key="3">
                  <p>주소 : {receiver_address}</p>
                  <p>전화번호 : {receiver_phone}</p>
                </Panel>
              </Collapse>
            </span>
          </div>
          <div class="info_list" id="info_num">
            <img src="/image/icon/truck.png" />
            <span className="info_text">
              <h2>운송장번호</h2>
              <div className="specific">
                <p>운송장 번호 : {invoice_num}</p>
                <p>지불 방법 : {payment}</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info003;
