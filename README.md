# 🇯🇵 Kana Master - AI 驅動高品質日語學習生態系統

一款結合 AI 課程生成、雲端語音同步以及行動端離線學習的完整解決方案。專為追求「類真人高品質發音」與「碎片時間學習」的日語初學者設計。

---

## 🌟 核心特色

* **🔊 三位一體語音策略**：獨家混合音訊技術，優先使用 **本地離線語音包 (VOICEVOX)**，次選 **雲端快取 (Google Drive)**，最後以 **系統 TTS** 為備援，確保發音永遠不斷線。
* **☁️ 雲端同步架構**：透過 Google Apps Script (GAS) 連結 Google 試算表與雲端硬碟，實現跨裝置課程與語音同步。
* **🤖 AI 課程專家**：配合專屬 **Prompt v3.2**，可由 Gemini 一鍵產出符合規格的課程 CSV，大幅降低內容產製成本。
* **📱 行動端離線學習**：支援一鍵下載高品質語音資源包，實現 100% 離線練習，音質不縮水。
* **🔤 漢字讀音標記**：完美還原 v3.9 經典佈局，支援漢字上面標註假名（Ruby）以及豐富的例句筆記顯示。

---

## 🛠️ 系統組件 (The 5 Pillars)

本專案由以下五大組件構成：

1.  **語言學習器 (index.html v4.2)**：終端學習介面，採用 React 18 與 Tailwind CSS 開發，具備 IndexedDB 資源管理。
2.  **語音庫管理中心 (Manager.html v4.6)**：管理端工具，支援連線至本機 VOICEVOX 進行批次語音補完。
3.  **GAS 後端服務 (code.gs v4.2)**：運行於 Google Apps Script 的 API 中心。
4.  **課程資料規格 (Lesson Spec v3.0)**：定義了漢字讀音與句子對齊的統一資料格式。
5.  **AI 課程專家 GEM (Prompt v3.2)**：專門負責產出標準格式課程的 AI 指令。

---

## 🚀 快速上手流程 (Workflow)

### 1. 部署後端 (GAS)
* 在 Google 試算表建立新專案，開啟「擴充功能 > Apps Script」。
* 貼入 `code.gs` 代碼並部署為「網頁應用程式」。
* 取得 **GAS Web App URL**。

### 2. 生成課程內容 (AI)
* 使用 `gem_prompt_v3.md` 的提示詞，讓 Gemini 產生課程 CSV。
* 將 CSV 內容貼入試算表中。

### 3. 補全高品質語音 (Manager)
* 啟動電腦上的 **VOICEVOX** 語音引擎。
* 開啟 `Manager.html`（建議透過 `python3 -m http.server` 運行）。
* 貼上 GAS URL，點擊「分析庫存缺口」，然後「開始自動補完」。

### 4. 開始學習 (Client)
* 手機開啟 `index.html`。
* 進入設定頁面貼上 GAS URL，同步課程並點擊「下載高品質離線包」。
* 開始享受極速、真實的日語學習體驗！

---

## 📄 資料格式規格 (v3.0)

為了確保 UI 上的讀音置中，請採用「一對一」標記格式：
* **格式**：`漢[かん]字[じ]`
* **範例**：`運[うん]轉[てん]手[しゅ]`

| 欄位名稱 | 說明 | 備註 |
| :--- | :--- | :--- |
| **unit** | 單元名稱 | 分類與篩選用 |
| **category** | 項目種類 | kana, word, sentence |
| **primary** | 主文字 | 支援 `漢[かん]字[じ]` 格式 |
| **reading** | 主發音 | 純假名，TTS 語音來源 |
| **meaning** | 繁體中文翻譯 | 中文意義 |
| **secondary** | 輔助內容 | 例句或例字，支援 Ruby 標記 |
| **secondaryReading** | 例句讀音 | `secondary` 的純假名版本，語音來源 |
| **notes** | 補充說明 | 顯示於卡片背面下方 |
| **emoji** | 視覺輔助 | 1 個相關記憶符號 |

---

## 🛠️ 技術開發

* **Frontend**: React 18, Tailwind CSS, Lucide Icons
* **Backend**: Google Apps Script, Google Drive API
* **Audio**: VOICEVOX (Local), Gemini TTS API, Web Speech API
* **Storage**: IndexedDB, Google Sheets, LocalStorage

---

## 📄 授權協議
本專案基於 **MIT 協議** 開源。歡迎社群自由貢獻與修改。

祝您在日語學習的道路上順利前行！ **がんばってください！**
