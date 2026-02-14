import { CharacterId } from "../config";

// アニメーションの型定義
export type AnimationType = "none" | "fadeIn" | "slideUp" | "slideLeft" | "zoomIn" | "bounce";

// ビジュアルの型定義
export interface VisualContent {
  type: "image" | "text" | "none";
  src?: string;
  text?: string;
  fontSize?: number;
  color?: string;
  animation?: AnimationType;
}

// 効果音の型定義
export interface SoundEffect {
  src: string;
  volume?: number;
}

// BGM設定
export interface BGMConfig {
  src: string;
  volume?: number;
  loop?: boolean;
}

// BGMトラック設定（複数トラック対応）
export interface BGMTrack {
  src: string;
  volume: number;
  loop: boolean;
  startId?: number;
  endId?: number;
  fadeIn: number;
  fadeOut: number;
}

// BGM設定（動画全体で使用 - 後方互換）
export const bgmConfig: BGMConfig | null = null;

// BGMトラック一覧
export const bgmTracks: BGMTrack[] = [];

// セリフデータの型定義
export interface ScriptLine {
  id: number;
  character: CharacterId;
  text: string;
  displayText?: string;
  scene: number;
  voiceFile: string;
  durationInFrames: number;
  pauseAfter: number;
  emotion?: "normal" | "happy" | "surprised" | "thinking" | "sad";
  visual?: VisualContent;
  se?: SoundEffect;
}

// シーン定義
export interface SceneInfo {
  id: number;
  title: string;
  background: string;
}

export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "メインコンテンツ", background: "solid" },
  { id: 3, title: "エンディング", background: "gradient" },
];

// このファイルは config/script.yaml から自動生成されます
// 編集する場合は config/script.yaml を編集して npm run sync-script を実行してください
export const scriptData: ScriptLine[] = [
  {
    "id": 1,
    "character": "zundamon",
    "text": "みんな〜！今日はエーピーアイとエムシーピーの違いを解説するのだ！",
    "displayText": "みんな〜！今日はAPIとMCPの違いを解説するのだ！",
    "scene": 1,
    "pauseAfter": 10,
    "emotion": "happy",
    "visual": {
      "type": "text",
      "text": "API vs MCP\n違いを解説！",
      "fontSize": 80,
      "color": "#ffffff",
      "animation": "zoomIn"
    },
    "voiceFile": "01_zundamon.wav",
    "durationInFrames": 186
  },
  {
    "id": 2,
    "character": "metan",
    "text": "エーピーアイは聞いたことあるけど、エムシーピーって最近よく聞くわね。何が違うのかしら？",
    "displayText": "APIは聞いたことあるけど、MCPって最近よく聞くわね。何が違うのかしら？",
    "scene": 1,
    "pauseAfter": 10,
    "emotion": "thinking",
    "voiceFile": "02_metan.wav",
    "durationInFrames": 236
  },
  {
    "id": 3,
    "character": "zundamon",
    "text": "まずはエーピーアイから説明するのだ！エーピーアイは「アプリケーション・プログラミング・インターフェース」の略なのだ！",
    "displayText": "まずはAPIから説明するのだ！APIは「Application Programming Interface」の略なのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "API\nApplication\nProgramming\nInterface",
      "fontSize": 60,
      "color": "#ffffff",
      "animation": "fadeIn"
    },
    "voiceFile": "03_zundamon.wav",
    "durationInFrames": 356
  },
  {
    "id": 4,
    "character": "metan",
    "text": "プログラム同士がやりとりするための窓口みたいなものね。",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "04_metan.wav",
    "durationInFrames": 135
  },
  {
    "id": 5,
    "character": "zundamon",
    "text": "そうなのだ！例えばツイッターには「ツイートを投稿する」エーピーアイがあって、プログラムから自動でツイートできるのだ。",
    "displayText": "そうなのだ！例えばTwitterには「ツイートを投稿する」APIがあって、プログラムから自動でツイートできるのだ。",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "05_zundamon.wav",
    "durationInFrames": 356
  },
  {
    "id": 6,
    "character": "metan",
    "text": "ラインにも「メッセージを送る」エーピーアイがあるわよね。ボットが自動で返信してくれるのもエーピーアイのおかげね。",
    "displayText": "LINEにも「メッセージを送る」APIがあるわよね。ボットが自動で返信してくれるのもAPIのおかげね。",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "06_metan.wav",
    "durationInFrames": 290
  },
  {
    "id": 7,
    "character": "zundamon",
    "text": "でも問題があるのだ。ツイッターとラインでは、エーピーアイの仕様が全然違うのだ！",
    "displayText": "でも問題があるのだ。TwitterとLINEでは、APIの仕様が全然違うのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "sad",
    "voiceFile": "07_zundamon.wav",
    "durationInFrames": 244
  },
  {
    "id": 8,
    "character": "metan",
    "text": "同じ「メッセージを送りたい」でも、サービスごとにリクエストの書き方もデータの形式も違うのね。",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "thinking",
    "voiceFile": "08_metan.wav",
    "durationInFrames": 263
  },
  {
    "id": 9,
    "character": "zundamon",
    "text": "だから両方に対応するアプリを作ろうとすると、ツイッター用とライン用で別々のプログラムを書かないといけないのだ。めちゃくちゃ大変なのだ！",
    "displayText": "だから両方に対応するアプリを作ろうとすると、Twitter用とLINE用で別々のプログラムを書かないといけないのだ。めちゃくちゃ大変なのだ！",
    "scene": 2,
    "pauseAfter": 15,
    "emotion": "sad",
    "voiceFile": "09_zundamon.wav",
    "durationInFrames": 390
  },
  {
    "id": 10,
    "character": "metan",
    "text": "サービスが増えるたびにどんどん大変になるわね。もっと簡単にならないのかしら？",
    "scene": 3,
    "pauseAfter": 10,
    "emotion": "thinking",
    "voiceFile": "10_metan.wav",
    "durationInFrames": 194
  },
  {
    "id": 11,
    "character": "zundamon",
    "text": "そこで登場するのがエムシーピーなのだ！「モデル・コンテキスト・プロトコル」の略なのだ！",
    "displayText": "そこで登場するのがMCPなのだ！「Model Context Protocol」の略なのだ！",
    "scene": 3,
    "pauseAfter": 10,
    "emotion": "happy",
    "visual": {
      "type": "text",
      "text": "MCP\nModel\nContext\nProtocol",
      "fontSize": 60,
      "color": "#ffffff",
      "animation": "fadeIn"
    },
    "voiceFile": "11_zundamon.wav",
    "durationInFrames": 270
  },
  {
    "id": 12,
    "character": "zundamon",
    "text": "エムシーピーは、バラバラなエーピーアイとエーアイの間に入って、接続を全部やってくれる仕組みなのだ！",
    "displayText": "MCPは、バラバラなAPIとAIの間に入って、接続を全部やってくれる仕組みなのだ！",
    "scene": 3,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "12_zundamon.wav",
    "durationInFrames": 290
  },
  {
    "id": 13,
    "character": "metan",
    "text": "使う側からするとどんな感じになるのかしら？",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "13_metan.wav",
    "durationInFrames": 110
  },
  {
    "id": 14,
    "character": "zundamon",
    "text": "例えばクロードに「今日のランチの写真をツイートして」と言うだけでいいのだ！",
    "displayText": "例えばClaudeに「今日のランチの写真をツイートして」と言うだけでいいのだ！",
    "scene": 4,
    "pauseAfter": 10,
    "voiceFile": "14_zundamon.wav",
    "durationInFrames": 212
  },
  {
    "id": 15,
    "character": "metan",
    "text": "それだけでいいの？ツイッターのエーピーアイの使い方とか知らなくていいの？",
    "displayText": "それだけでいいの？TwitterのAPIの使い方とか知らなくていいの？",
    "scene": 4,
    "pauseAfter": 10,
    "emotion": "surprised",
    "voiceFile": "15_metan.wav",
    "durationInFrames": 184
  },
  {
    "id": 16,
    "character": "zundamon",
    "text": "知らなくていいのだ！裏側でエムシーピーサーバーがツイッターのエーピーアイに自動で繋いでくれるのだ！",
    "displayText": "知らなくていいのだ！裏側でMCPサーバーがTwitterのAPIに自動で繋いでくれるのだ！",
    "scene": 4,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "16_zundamon.wav",
    "durationInFrames": 273
  },
  {
    "id": 17,
    "character": "metan",
    "text": "じゃあ「この内容をラインで送って」と言えば、ラインにも送れるのかしら？",
    "displayText": "じゃあ「この内容をLINEで送って」と言えば、LINEにも送れるのかしら？",
    "scene": 4,
    "pauseAfter": 10,
    "voiceFile": "17_metan.wav",
    "durationInFrames": 201
  },
  {
    "id": 18,
    "character": "zundamon",
    "text": "その通りなのだ！ラインのエムシーピーサーバーがあれば、ラインのエーピーアイへの接続も自動でやってくれるのだ！",
    "displayText": "その通りなのだ！LINEのMCPサーバーがあれば、LINEのAPIへの接続も自動でやってくれるのだ！",
    "scene": 4,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "18_zundamon.wav",
    "durationInFrames": 308
  },
  {
    "id": 19,
    "character": "metan",
    "text": "ところで、エムシーピーってエーピーアイがあるサービスにしか使えないのかしら？",
    "displayText": "ところで、MCPってAPIがあるサービスにしか使えないのかしら？",
    "scene": 5,
    "pauseAfter": 10,
    "emotion": "thinking",
    "voiceFile": "19_metan.wav",
    "durationInFrames": 186
  },
  {
    "id": 20,
    "character": "zundamon",
    "text": "実はそうじゃないのだ！エーピーアイがなくても、オーエスのファイルシステムの仕組みやアプリの構造さえわかっていれば、エムシーピーは作れるのだ！",
    "displayText": "実はそうじゃないのだ！APIがなくても、OSのファイルシステムの仕組みやアプリの構造さえわかっていれば、MCPは作れるのだ！",
    "scene": 5,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "20_zundamon.wav",
    "durationInFrames": 392
  },
  {
    "id": 21,
    "character": "metan",
    "text": "えっ、それってどういうこと？",
    "scene": 5,
    "pauseAfter": 10,
    "emotion": "surprised",
    "voiceFile": "21_metan.wav",
    "durationInFrames": 92
  },
  {
    "id": 22,
    "character": "zundamon",
    "text": "例えば「デスクトップのファイル名を全部まとめて変更して」とエーアイに頼むと、エムシーピーがパソコンのファイルシステムを操作して一括リネームしてくれるのだ！",
    "displayText": "例えば「デスクトップのファイル名を全部まとめて変更して」とAIに頼むと、MCPがパソコンのファイルシステムを操作して一括リネームしてくれるのだ！",
    "scene": 5,
    "pauseAfter": 10,
    "voiceFile": "22_zundamon.wav",
    "durationInFrames": 443
  },
  {
    "id": 23,
    "character": "metan",
    "text": "パソコンのアプリを直接操作することもできるのかしら？",
    "scene": 5,
    "pauseAfter": 10,
    "voiceFile": "23_metan.wav",
    "durationInFrames": 134
  },
  {
    "id": 24,
    "character": "zundamon",
    "text": "できるのだ！アプリの構造がわかれば、エムシーピーを通じてエーアイがアプリを操作することもできるのだ。エーピーアイがなくてもいいのがエムシーピーのすごいところなのだ！",
    "displayText": "できるのだ！アプリの構造がわかれば、MCPを通じてAIがアプリを操作することもできるのだ。APIがなくてもいいのがMCPのすごいところなのだ！",
    "scene": 5,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "24_zundamon.wav",
    "durationInFrames": 458
  },
  {
    "id": 25,
    "character": "zundamon",
    "text": "しかもクロードでもチャットジーピーティーでも、どのエーアイからでも同じエムシーピーサーバーが使えるのだ！一度作れば使い回せるのだ！",
    "displayText": "しかもClaudeでもChatGPTでも、どのAIからでも同じMCPサーバーが使えるのだ！一度作れば使い回せるのだ！",
    "scene": 6,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "25_zundamon.wav",
    "durationInFrames": 362
  },
  {
    "id": 26,
    "character": "zundamon",
    "text": "つまり、エーピーアイへの接続だけじゃなく、ファイル操作やアプリの操作まで、エーアイができることを広げてくれる。それがエムシーピーなのだ！",
    "displayText": "つまり、APIへの接続だけじゃなく、ファイル操作やアプリの操作まで、AIができることを広げてくれる。それがMCPなのだ！",
    "scene": 6,
    "pauseAfter": 10,
    "emotion": "happy",
    "visual": {
      "type": "text",
      "text": "APIへの接続だけじゃない！\nAIの可能性を広げるMCP",
      "fontSize": 55,
      "color": "#ffffff",
      "animation": "zoomIn"
    },
    "voiceFile": "26_zundamon.wav",
    "durationInFrames": 407
  },
  {
    "id": 27,
    "character": "metan",
    "text": "シンプルで分かりやすいわね。今日もありがとう、ずんだもん！",
    "scene": 6,
    "pauseAfter": 5,
    "emotion": "happy",
    "voiceFile": "27_metan.wav",
    "durationInFrames": 155
  },
  {
    "id": 28,
    "character": "zundamon",
    "text": "みんなも参考にしてほしいのだ！バイバイなのだ〜！",
    "scene": 6,
    "pauseAfter": 0,
    "emotion": "happy",
    "voiceFile": "28_zundamon.wav",
    "durationInFrames": 140
  },
  {
    "id": 29,
    "character": "metan",
    "text": "バイバイ〜！",
    "scene": 6,
    "pauseAfter": 60,
    "emotion": "happy",
    "voiceFile": "29_metan.wav",
    "durationInFrames": 25
  }
];

// VOICEVOXスクリプト生成用
export const generateVoicevoxScript = (
  data: ScriptLine[],
  characterSpeakerMap: Record<CharacterId, number>
) => {
  return data.map((line) => ({
    id: line.id,
    character: line.character,
    speakerId: characterSpeakerMap[line.character],
    text: line.text,
    outputFile: line.voiceFile,
  }));
};
