import React from "react";
import "./index.css";
import { Collapse } from "antd";
import { useHistory } from "react-router-dom";

const { Panel } = Collapse;
const text_product = `그릭요거트, 오트밀`;
const text_sender = `하은이가 보냈삼`;
const text_receiver = `민지가 받았삼`;

function MorePage() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <span id="banner">Qpong</span>
        <img id="back_img" src="image/icon/home.png" />
      </div>
      <div id="content">
        <div id="delivery_info">
          <div class="info_list" id="info_product">
            <img src="/image/icon/box.png" />
            <span className="info_text">
              <h2>상품명</h2>

              <Collapse ghost>
                <Panel header=" 그릭요거트 외 1건" key="1">
                  <p>{text_product}</p>
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
                  <p>{text_sender}</p>
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
                  <p>{text_receiver}</p>
                </Panel>
              </Collapse>
            </span>
          </div>
          <div class="info_list" id="info_num">
            <img src="/image/icon/truck.png" />
            <span className="info_text">
              <h2>운송장번호</h2>
              <div className="specific">0000-0000-0000</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MorePage;
