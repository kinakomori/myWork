<template>
  <section>
    <h2 class="worksTitle">LP</h2>
    <section class="worksWrapper">
      <p>サイト内広告枠に掲載する宿泊施設とのタイアップ広告ページデザインや<br>新サービスのティザーページ等を記載しています。</p>
      <h3 class="worksTitlePrimary">
        タイアップページ作成
      </h3>
      <p><b>プラットフォーム</b>：PCWeb</p>
      <p><b>技術</b>：html/css,Jquery</p>
      <p><b>期間</b>：1ページ当たり1～2日</p>
      
      <h3 class="worksTitleSecondary">ザ・リッツカールトン東京</h3>
      <p>リッツカールトン東京様のクラブフロア紹介ページ。<br>支配人の方との打ち合わせや、実際クラブフロアを訪れるなどし作成しました。</p>
      <video src="../../assets/img/lp_ritz.webm" preload="auto" autoplay controls class="worksIPhoneVideo"></video>
      
      <h3 class="worksTitleSecondary">シェラトン・グランデ</h3>
      <p>タイアップ広告ページ</p>
      <p class="worksLPimg">
        <img src="../../assets/img/lp_sheraton.png" width="840" />
      </p>

      <h3 class="worksTitleSecondary">緑草音</h3>
      <p class="worksLPimg">
        <img src="../../assets/img/lp_ryokusone.png" width="840" />
      </p>
      
      <h3 class="worksTitleSecondary">バケーションレンタルサービス</h3>
      <p>バケーションレンタルサービスティザーページ</p>
      <p class="worksLPimg">
        <img src="../../assets/img/lp_vr.jpg" width="840" />
      </p>
    </section>
  </section>
</template>

<script>
export default {
  name: 'worksLp',
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
.worksImg01 {
  padding-top: 40px;
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
.worksRoleList {
  padding: 20px;
  list-style: circle;
}
.worksIPhone {
  position: relative;
  margin-top: 40px;
  width: 320px;
}
.worksIPhoneVideo {
  width: 100%;
  max-width: 840px;
  margin-top: 40px;
}
.worksLPimg {
  margin-top: 40px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  width: 840px;
  max-height: 960px;
  overflow: hidden;
}
</style>
