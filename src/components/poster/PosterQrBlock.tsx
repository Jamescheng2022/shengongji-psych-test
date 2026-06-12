const MINIAPP_PLACEHOLDER = "/assets/page-04-poster/miniapp-code-placeholder.svg";

export function PosterQrBlock() {
  return (
    <section className="poster-qr-block" aria-label="小程序码区域">
      <img src={MINIAPP_PLACEHOLDER} alt="小程序码占位图" />
      <div>
        <span>长按识别</span>
        <strong>测你的深宫命格</strong>
      </div>
    </section>
  );
}
