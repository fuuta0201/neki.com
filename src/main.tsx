import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/styles/stalker.css';
import App from './App.tsx';

const Stalker = () => {
  useEffect(() => {
    const stalker = document.getElementById('stalker');
    if (!stalker) return;

    let hovFlag = false;
    let rotation = 0;

    // 回転アニメーション
    const rotateCursor = () => {
      rotation += 1; // 回転速度を調整
      stalker.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      requestAnimationFrame(rotateCursor);
    };

    // マウス移動に合わせてストーカーを追従
    const handleMouseMove = (e: MouseEvent) => {
      if (!hovFlag) {
        stalker.style.left = `${e.clientX}px`;
        stalker.style.top = `${e.clientY}px`;
      }
    };

    // リンクに吸い付く処理
    const handleMouseOver = (e: Event) => {
      hovFlag = true;
      stalker.classList.add('hov_');

      // イベントを MouseEvent にキャスト
      const mouseEvent = e as MouseEvent;

      const rect = (mouseEvent.target as HTMLElement).getBoundingClientRect();
      const posX = rect.left + rect.width / 2;
      const posY = rect.top + rect.height / 2;

      stalker.style.left = `${posX}px`;
      stalker.style.top = `${posY}px`;
    };

    const handleMouseOut = () => {
      hovFlag = false;
      stalker.classList.remove('hov_');
    };

    // イベントリスナーを登録
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a:not(.no_stick_)').forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    // アニメーション開始
    rotateCursor();

    // クリーンアップ処理
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a:not(.no_stick_)').forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return <div id="stalker"></div>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Stalker />
    <App />
  </StrictMode>,
);
