﻿<template>
  <section>
    <h2 class="worksTitle">IL</h2>
    <section class="worksWrapper">
      <p>一休.com（高級旅館・高級ホテルのみを取り扱った国内OTA）にてUI/UXデザイン・ビジュアルデザイン、<br>及びフロントエンド実装業務の一部を担当。<br>以下「一休.com」で自身が担当した事例の一部を記載。</p>
      <h3 class="worksTitlePrimary">
        宿泊施設情報ページリニューアル
      </h3>
      <p><b>プラットフォーム</b>：PCWeb + MobileWeb</p>
      <p><b>技術</b>：C#,Go,Vue.js/Vuex,html/css</p>
      <img src="../../assets/img/works_01.png" width="840" class="worksImg01" />
      
      <h3 class="worksTitleSecondary">はじめに</h3>
      <p>わたしはサイト改善のためにチームメンバーとユーザーの行動ログを調査していました。<br>そこでわかったことは、サイト内でユーザーにとって無駄と思われるページ遷移が起きていたということです。<br>具体的には「一度トップページに戻ってから再検索」のような事象が多くのユーザで起こっていました。<br>この現象はサイトの導線が問題を抱えていることを示唆しています。<br>私たちはこの問題を解決してユーザーにより良い体験を提供したいと考えました。</p>
      
      <h3 class="worksTitleSecondary">挑戦</h3>
      <p>よりシンプルなサイトの導線にしたいと考えました。<br>そのために私たちは、宿泊施設について5ページに分散していた情報を、1ページに集約することにしました。<br>これは階層構造の複雑化を抑制し、ページ遷移によるインタラクションコストの削減にポジティブな影響を与えます。</p>

      <h3 class="worksTitleSecondary">役割</h3>
      <p>2名のエンジニアとデザイナー（私自身）、計3名のチームで行い、<br>私は以下の主な業務を担当しました。</p>
      <ul class="worksRoleList">
        <li>ワイアーフレーム</li>
        <li>プロトタイピング</li>
        <li>UI/ビジュアル/インタラクション</li>
        <li>フロントエンド実装</li>
      </ul>
      
    </section>
  </section>
</template>

<script>
export default {
  name: 'worksIllustration',
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
  position: absolute;
  top: 68px;
  left: 18px;
  width: 284px;
  cursor: pointer;
}
</style>
