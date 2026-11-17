// 1. コアライブラリ

// 2. 型定義 (Type Imports)
import type { FC } from 'react';
import type { BrailleDot, BrailleColorType } from '../../data/types';

// 3. サードパーティライブラリ (※ 無し)

// 4. プロジェクト内のモジュール / エイリアスパス

// 5. 相対パスによるインポート

// 6. スタイルシート / アセット
import styles from './FingerBrailleSVG.module.css';

const COLOR_MAPS: Record<BrailleColorType, Record<BrailleDot, string>> = {
  hiragana: {
    1: '#000000',
    2: '#000000',
    3: '#007bff',
    4: '#000000',
    5: '#007bff',
    6: '#007bff',
  },
  yagyou: {
    1: '#000000',
    2: '#000000',
    3: '#000000',
    4: '#000000',
    5: '#9b5bfa',
    6: '#9b5bfa',
  },
  wagyou: {
    1: '#000000',
    2: '#f55bfa',
    3: '#000000',
    4: '#000000',
    5: '#f55bfa',
    6: '#f55bfa',
  },
  alphabet: {
    1: '#000000',
    2: '#000000',
    3: '#ff6600',
    4: '#000000',
    5: '#000000',
    6: '#ff6600',
  },
  number: {
    1: '#000000',
    2: '#000000',
    3: '#ff6600',
    4: '#000000',
    5: '#000000',
    6: '#ff6600',
  },
  kigou: {
    1: '#000000',
    2: '#00e639',
    3: '#00e639',
    4: '#00e639',
    5: '#00e639',
    6: '#00e639',
  },
};

interface FingerBrailleSVGProps {
  /** 押されている点（1〜6）の配列。空配列の場合は全て非表示。 */
  brailleDots: BrailleDot[];
  /** 使用するカラーマップ（省略時はひらがな用） */
  colorType?: BrailleColorType;
  /** 任意のカスタムカラーマップ（指定された場合、点の色を上書き・追加できます） */
  customColorMap?: Partial<Record<BrailleDot, string>>;
}

const FingerBrailleSVG: FC<FingerBrailleSVGProps> = ({
  brailleDots = [],
  colorType = 'hiragana',
  customColorMap,
}) => {
  const dotSet = new Set(brailleDots);

  const colorMap = {
    ...COLOR_MAPS[colorType],
    ...customColorMap,
  };

  // 各ドットのスタイル（塗りと枠線）を計算するヘルパー関数
  const getDotStyle = (dotNum: BrailleDot) => {
    const isPressed = dotSet.has(dotNum);
    return {
      fill: isPressed ? colorMap[dotNum] : 'none',
      stroke: isPressed ? 'none' : '#ccc',
      strokeWidth: 6,
      strokeDasharray: '7.73, 7.73',
    };
  };

  return (
    <div className={`finger-braille-svg-container ${styles.container}`}>
      {/* 左手 */}
      <div className={styles.hand}>
        <svg
          id="_svg_layout"
          data-name="svg_layout"
          viewBox="0 0 867 1015"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hand"
            d="M379 1007h69q91-2 145-76 27-34 56-67l102-126q49-57 94-116c26-36 17-92-30-115-36-18-74-8-99 23l-79 97q-4 6-10 5-9-1-9-11c1-36-2-72 1-107q8-56 20-113l22-103 26-119q12-48-26-75c-26-18-70-8-84 21q-10 24-14 50l-23 105-20 97-14 66q-3 15-18 19c-8 2-17-5-17-13l6-154 9-228q2-38-33-54c-34-14-74-1-84 35-5 20-4 41-5 61l-12 264-3 72q-1 8-7 14c-9 7-20 1-21-11l-10-122-14-168q-2-31-5-61-6-38-43-50-39-11-65 20c-14 16-14 35-13 54l20 239 8 82q0 18-15 20c-8 1-18-8-20-17l-24-151q-5-40-13-79c-11-43-69-58-100-27a61 61 0 0 0-18 58l21 131q9 49 16 98 8 46 10 93l1 193q1 70 40 130a247 247 0 0 0 206 116h76Z"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: 10,
              strokeWidth: '15px',
            }}
          />
          <circle cx="626.2" cy="167" r="32" style={getDotStyle(1)} />
          <circle cx="426.5" cy="75.7" r="32" style={getDotStyle(2)} />
          <circle cx="231.7" cy="107.7" r="32" style={getDotStyle(3)} />
        </svg>
      </div>

      {/* 右手 */}
      <div className={styles.hand}>
        <svg
          id="_svg_layout"
          data-name="svg_layout"
          viewBox="0 0 867 1015"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="hand"
            d="M488 1007h-69q-90-2-146-76-26-34-55-67L116 738q-48-57-94-116a77 77 0 0 1 30-115c35-18 74-8 99 23l79 97q4 6 10 5 9-1 8-11c0-36 3-72 0-107q-8-56-20-113l-22-103-26-119q-12-48 26-75c26-18 70-8 84 21q10 24 14 50l23 105 20 97 14 66q3 15 18 19c8 2 17-5 16-13l-5-154-9-228q-1-38 33-54c34-14 74-1 84 35 5 20 4 41 5 61l12 264 3 72q0 8 7 14c9 7 20 1 21-11l10-122 14-168q2-31 5-61 6-38 43-50 39-11 65 20c14 16 14 35 12 54l-19 239-8 82q-1 18 15 20c8 1 18-8 20-17l24-151q5-40 13-79c11-43 69-58 100-27q24 24 18 58l-21 131q-9 49-16 98-8 46-10 93l-1 193q-1 70-40 130a247 247 0 0 1-206 116h-76Z"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: 10,
              strokeWidth: '15px',
            }}
          />
          <circle cx="240.7" cy="167" r="32" style={getDotStyle(4)} />
          <circle cx="440.4" cy="75.7" r="32" style={getDotStyle(5)} />
          <circle cx="635.2" cy="107.7" r="32" style={getDotStyle(6)} />
        </svg>
      </div>
    </div>
  );
};

export default FingerBrailleSVG;
