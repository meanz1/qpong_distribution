import React from "react";
import "./index.css";
import { Collapse } from "antd";
import { useHistory, Link } from "react-router-dom";
const { Panel } = Collapse;
const text_product = `국내산 황도 복숭아 (6개입) 1.2kg 1팩, 청송 사과즙 20팩 (1박스)`;
const sender_address = `(0114) 경기도 과일시 새콤로 105동 504호`;
const sender_phone = `12345-67`;
const sender_memo = `맛있게 먹어!`;
const receiver_address = `(8282) 강원도 농사시 쌀밭로4 9동 1호`;
const receiver_phone = `1127-0516`;
const invoice_num = `123-1111-1111`;
const payment = `선불`;

function Info001() {
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
                  header=" 국내산 황도 복숭아(6개입) 1.2kg 1팩 외 1건"
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
                <Panel header=" 윤하은" key="2">
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
                <Panel header=" 김민지" key="3">
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
export default Info001;
