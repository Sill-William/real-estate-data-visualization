<template>
  <nav class="uk-navbar-container">
    <div class="uk-container">
      <div uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" href="#">WY Data</a>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li><a onclick="">首页</a></li>
            <li><a onclick="">自动估值</a></li>
            <li><a onclick="">指数/价格</a></li>
            <li><a onclick="">热力分析</a></li>
            <li><a onclick="">分析报告</a></li>
            <li><a onclick="">城市趋势</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
}
</script>