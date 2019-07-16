<template>
  <section>
    <!-- <h2 class="worksTitle">UI</h2> -->
    <section class="worksWrapper">
      <p>一休.com（高級旅館・高級ホテルのみを取り扱った国内OTA）にてUI/UXデザイン・ビジュアルデザイン、<br>及びフロントエンド実装業務の一部を担当。<br>以下「一休.com」で自身が担当した事例の一部を記載。</p>
      <!-- ここから -->
      <h3 class="worksTitlePrimary">
        宿泊施設情報ページリニューアル
      </h3>
      <p><b>プラットフォーム</b>：PCWeb + MobileWeb</p>
      <p><b>技術</b>：C#,Go,Vue.js/Vuex,html/css</p>
      <p><b>期間</b>：16週間</p>
      <img src="../../assets/img/works_01.png" width="840" class="worksImg01" decoding ="async" />
      
      <h3 class="worksTitleSecondary">はじめに</h3>
      <p>わたしはサイト改善のためにチームメンバーとユーザーの行動ログを調査しました。<br>そこでわかったことは、サイト内でユーザーにとって無駄と思われるページ遷移が起きていたということです。<br>具体的には「一度トップページに戻ってから再検索」のような事象が多くのユーザで起こっていました。<br>この現象はサイトの導線が問題を抱えていることを示唆しています。<br>私たちはこの問題を解決してユーザーにより良い体験を提供したいと考えました。</p>
      
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
      
      <h3 class="worksTitleSecondary">結果</h3>
      <p>大幅なインターフェースデザインの見直しを行い、すべての宿泊施設情報をスクロール又は、SPAライクなトランジッションによりストレスなく閲覧できるよな変更を実施。<br>これにより重要なビジネス指標である「宿泊プランページ」の閲覧率が50%改善しました。</p>
      <div class="worksIPhone">
        <img src="../../assets/img/iphone8.png" width="100%" decoding ="async" />
        <video
          src="../../assets/img/works01.mp4"
          preload="auto"
          autoplay
          controls
          class="worksIPhoneVideo"
          decoding ="async"
        ></video>
      </div>
      <!-- ここから -->
      <h3 class="worksTitlePrimary">
        フードデリバリーサービス
      </h3>
      <p><b>プラットフォーム</b>：iOS + Android</p>
      <p><b>技術</b>：React Native（技術選定のみ）</p>
      <p><b>期間</b>：2週間</p>
      <img src="../../assets/img/works_02.png" width="840" class="worksImg01" />
      
      <h3 class="worksTitleSecondary">はじめに</h3>
      <p>高級レストレンのメニューを顧客に宅配するフードデリバリーアプリのUI/UXを担当しました。<br>これは「一休.com」が所有する営業リソースと「一休レストラン」が築いた高級レストランとのエンゲージメント活用した新規事業です。</p>
      
      <h3 class="worksTitleSecondary">挑戦</h3>
      <p>開発期間が限られていたため、私たちは一休.comとしてのBIを崩さない外部リソースの管理が求められました。<br>私自身はデザインファームと連携し画面の設計やBIの策定を進めました。</p>

      <h3 class="worksTitleSecondary">役割</h3>
      <p>PM1名,営業1名,エンジニア1名,デザイナー1名（私自身）のチームでプロジェクトにあたりました。<br>以下が私の主な業務です。</p>
      <ul class="worksRoleList">
        <li>競合調査</li>
        <li>ワイアーフレーム</li>
        <li>プロトタイピング</li>
        <li>外部リソース管理</li>
      </ul>
      
      <h3 class="worksTitleSecondary">結果</h3>
      <p>諸事情によりペンディングとなりましたが、新規プロダクト立ち上げの経験としては有意義でした。</p>
      <p>以下に「注文確認画面」「店舗管理画面」のプロトタイプを記載します。</p>
      <h4 class="worksTitleSub">注文確認画面</h4>
      <video
        src="../../assets/img/works02.mp4"
        preload="auto"
        autoplay
        controls
        decoding ="async"
        class="worksVideo"
      ></video>
      <h4 class="worksTitleSub">店舗管理画面</h4>
      <ul class="worksImgList">
        <li><img src="../../assets/img/works_03.png" width="100%" /></li>
        <li><img src="../../assets/img/works_04.png" width="100%" /></li>
        <li><img src="../../assets/img/works_05.png" width="100%" /></li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'worksUI',
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
  color: #fff;
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
  border-top: 1px solid #e3e3e3;
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
.worksVideo {
  width: 640px;
}
.worksTitleSub {
  margin: 40px 20px 20px;
  font-size: 24px;
}
.worksImgList {
  display: flex;
  justify-content: space-between;
}
.worksImgList > li {
  width: 32%;
}
.worksImgList > li > img {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
</style>
