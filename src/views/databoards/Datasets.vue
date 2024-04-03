<template>
  <context-holder />
  <div class="uk-container">
    <!-- <div class="main-title">
      <h1>网裕数据库</h1>
    </div> -->
    <!-- <div class="main-text">
      覆盖黑龙江省 <br />
      2015年开始自动更新。<br />
      <br />
      数据体系 <br />
      以地址为主键管理城镇小区和房产交易、城市配套设施等数据，并融合社会、经济、自然环境等数据。<br />
      数据来源 <br />
      网裕数据库2015年开始建设数据生态系统，形成了数据多渠道汇集、自动加工融合、高效率管理应用，
      通过应用服务用户并获得业务交互、需求关注、问题反馈等数据，促进数据汇集动力和质量提升改善。
      禧泰数据库内容覆盖全国所有城镇、维度多样、自动与市场同步更新，具有全新准的特点。<br />
    </div> -->
    <div class="data-count-show-panel">
      <span class="panel-title">当前数据库中数据总数</span><br />
      <!-- <span >{{ dataCount }}</span> -->
      <!-- <div v-html="dataCount"></div> -->
      <div v-html="dataCountHtml"></div>
    </div>
    <Divider />
    <div>
      <div class="main-table-title">网裕全国数据库</div>

      <table class="uk-table uk-table-divider uk-table-striped" cellpadding="0" cellspacing="0" unselectable="yes"
        style="width: 100%; background-color: #fff">
        <colgroup>
          <col width="78" />
          <col class="tleft" width="117" />
          <col class="tleft" width="212" />
          <col width="185" />
          <col width="86" />
          <col width="86" />
          <col width="90" />
        </colgroup>
        <thead class="resizable"></thead>
        <tbody class="default" style="font-size: 14px">
          <tr style="
              height: 31px;
              font-weight: bold;
              font-size: 14px;
              background: #f6f6f6;
            ">
            <td colspan="1" rowspan="1">
              <div>
                城市要素
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                数据类别
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                数据项目
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                数据粒度
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                数据规模
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                开始时间
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                更新频率
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="4">
              <div>
                区域
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="4">
              <div>
                行政区划
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                省
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                30
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                直辖市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                4
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                地级行政区
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                333
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                县级行政区（含区、县）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2,932
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                乡级行政区（含乡）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>4.27万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                社会管理
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                社区
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                61.9万
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                功能区
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>374</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr> -->
          <tr>
            <td colspan="1" rowspan="20">
              <div>
                建筑
                <div></div>
              </div>
            </td>
            <!-- <td class="tleft" colspan="1" rowspan="2">
              <div>
                土地
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                土地出让信息
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                宗
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>38.2万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2016年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                日
                <div></div>
              </div>
            </td> -->
          </tr>
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                土地成交信息
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                宗
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>28.0万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2016年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                村庄
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>56.2万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr> -->
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                住区
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                居民区
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>13.6万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                物业小区
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>59.1万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="2" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                建筑物
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                幢
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                房屋
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                套间
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>1.93亿</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="3">
              <div>
                城市配套
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                写字楼
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                4.21万
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                商业服务、公共服务与公共管理、工厂园区、园林景观
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>122万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                地铁站
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>5,034</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr> -->
          <tr>
            <td class="tleft" colspan="1" rowspan="4">
              <div>
                住房交易<br />
                <div></div>
              </div>
            </td>
            <!-- <td class="tleft" colspan="1" rowspan="1">
              <div>
                新楼盘报价
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>199万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2010年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td> -->
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                二手房挂牌
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>14.1亿</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                租房挂牌（含合租）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>8.93亿</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                二手房成交
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>397万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2015年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                租房成交
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>155万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2015年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                商铺交易<br />
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                商铺出售挂牌
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>3,518万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                商铺出租挂牌
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>3,103万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                办公用房交易<br />
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                办公用房出售挂牌
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>1,788万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                办公用房出租挂牌
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>6,362万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                实时
                <div></div>
              </div>
            </td>
          </tr> -->
          <!-- <tr>
            <td class="tleft" colspan="1" rowspan="3">
              <div>
                房地产企业
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                房地产开发商
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>11.8万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                物业服务企业
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>7.15万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                房地产经纪人活跃人数
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                个
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>25.1万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="7">
              <div>
                房价行情
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                新盘<br />（报价）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市｜区市县｜楼盘
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2005年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                二手房<br />（挂牌、成交、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                租房<br />（挂牌、成交、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2003年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                商铺买卖<br />（挂牌、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2005年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                商铺租赁<br />（挂牌、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2005年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                办公用房买卖<br />（挂牌、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2005年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                办公用房租赁<br />（挂牌、关注）
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区市县｜街镇｜小区｜地标附近
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2005年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                城市住房指标
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市｜县级市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2022年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="2">
              <div>
                网络
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                道路
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                城市道路
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>44.6万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                同步
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                交通线路
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                公共交通
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                条
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>5.66万</div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="6">
              <div>
                社会经济
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                人口
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                规模
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区县市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2009年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                结构
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2018年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                市场主体
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                工商企业
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                个体工商户
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="2">
              <div>
                国民经济
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                地区生产总值GDP
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区县市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2009年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                居民人均可支配收入
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                全国｜市｜区县市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2009年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="3">
              <div>
                自然环境
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="3">
              <div>
                环境
                <div></div>
              </div>
            </td>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                天气
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市｜区市县｜街镇
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2011年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                日
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                空气质量
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市｜区市县｜街镇
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2016年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                日
                <div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tleft" colspan="1" rowspan="1">
              <div>
                人居气候
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                市
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                2011年
                <div></div>
              </div>
            </td>
            <td colspan="1" rowspan="1">
              <div>
                年
                <div></div>
              </div>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { h, ref, render } from 'vue'
import { Divider, message } from "ant-design-vue"

import type { Response } from '@/types/global'
import { BaseData } from '@/api/BaseData'

const [messageApi, contextHolder] = message.useMessage()

const baseData = new BaseData()

export default {
  name: "Datasets",
  components: {
    Divider,
    contextHolder
  },
  data() {
    const dataCount = ref<number>()
    const dataCountHtml = ref<string>() 
    return {
      dataCount,
      dataCountHtml,
      messageApi,
    }
  },
  methods: {
    _splitNum(num: number): number[] {
      let res: number[] = []
      for (; num > 10; num = Math.floor(num / 10)) res.unshift(num % 10)
      res.unshift(num)
      return res
    },
    _getCount() {
      baseData.fetchRecords('DataCount')
        .then((resp: Response) => {
          // let split_num: number[] = this._splitNum(resp.data[0])
          this.dataCount = resp.data[0]
          console.log(this.dataCount)
          this._divCount()
        })
        .catch((error: Error) => {
          this.messageApi.error('请求后台数据失败')
          console.error(error)
        })
    },
    _divCount() {
      let split_num: number[] = this._splitNum(this.dataCount ? this.dataCount : 0)
      this.dataCountHtml = split_num.map((single: number) => {
        return `
        <div style="display: block; background-color: #000; font-size: 42px; color: #fff; font-weight: bold; padding: 4px; width: 40px;">${single}</div>
        `
      }).join('')
      console.log(this.dataCountHtml)
    }
  },
  mounted() {
    this._getCount()
    this._divCount()
    setInterval(() => {
      if (!this.dataCount) return
      this.dataCount += 10;
      this._divCount()
    }, 5000)
  }
};
</script>

<style lang="less" scoped>
@standard-margin: 8px;

.main-title {
  // padding: @standard-margin 0;
  padding-block-start: @standard-margin;
}

.main-text {
  font-size: larger;
  background-color: lightgray;
  padding: @standard-margin;
}

.main-table-title {
  font-size: 30px;
  color: black;
  font-weight: bold;
}

.data-count-show-panel {
  // background-color: lightgray;
  // margin: @standard-margin 0;
  // padding: @standard-margin;
  font-size: 26px;
  text-align: center;

  // display: flex;
}

.panel-title {
  font-size: medium;
}

.data-count-show-panel > div {
  display: flex;
  justify-content: center;
  gap: 6px;
}
</style>