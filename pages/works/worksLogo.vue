<template>
  <section>
    <h2 class="worksTitle">LG</h2>
    <section class="worksWrapper">
      <p>ゼミの現役生・OB生の交流の場として開催される<br>「カタリバ」のロゴデザイン</p>
      <h3 class="worksTitlePrimary">
        法政大学 竹口ゼミ MeetUp ロゴデザイン
      </h3>
      <p><b>技術</b>：Illustrator,手書き</p>
      <p><b>期間</b>：3日</p>
      <h3 class="worksTitleSecondary">デザイン案</h3>
      <ul>
        <li class="worksLogoItem"><img src="../../assets/img/logo01.png" /></li>
        <li class="worksLogoItem"><img src="../../assets/img/logo02.png" /></li>
        <li class="worksLogoItem"><img src="../../assets/img/logo03.png" /></li>
      </ul>
      <h3 class="worksTitleSecondary">採用案</h3>
      <div class="worksLogoItem"><img src="../../assets/img/logo04.png" /></div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'worksLogo',
}
</script>

<style scoped>
.worksTitle {
  display: flex;
  width: 136px;
  height: 124px;
  font-size: 62px;
  margin-top: 40px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    -45deg,
    rgb(0, 167, 189) 0%,
    rgb(0, 128, 160) 100%
  );
  position: relative;
}
.worksTitle::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.65);
  width: calc(20vw + 136px);
}
.worksWrapper {
  margin: 60px 0 0 54px;
}
.worksTitlePrimary,
.worksTitleSecondary {
  margin: 60px 0 20px;
  font-size: 32px;
}
.worksTitleSecondary {
  font-weight: normal;
  position: relative;
  display: flex;
  align-items: center;
}
.worksTitleSecondary::before {
  content: '';
  display: block;
  height: 10px;
  width: 10px;
  background: #fff;
  position: absolute;
  left: -54px;
}
.worksTitleSecondary::after {
  content: '';
  display: block;
  width: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.65);
  position: absolute;
  left: -54px;
}
.worksLogoItem {
  width: 480px;
  padding: 60px 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

</style>
