import React from "react";
import "./index.css";
import { Collapse } from "antd";
import { useHistory, Link } from "react-router-dom";
const { Panel } = Collapse;
const text_product = `해피홈 암막 중형커튼, 그레이`;
const sender_address = `(0501) 경기도 오늘시 꾸밈로 해피홈공장 2단지`;
const sender_phone = `666-4567`;
const sender_memo = `이용해 주셔서 감사합니다. – 대표 서영서`;
const receiver_address = `(2034) 강원도 의자시 책상로 18 510동 905호`;
const receiver_phone = `416-0222`;
const invoice_num = `456-2222-2222`;
const payment = `착불`;

function Info002() {
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
                <Panel header=" 해피홈 암막 중형커튼, 그레이" key="1">
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
                <Panel header=" 서영서" key="2">
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
                <Panel header=" 큐앓이" key="3">
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
export default Info002;
