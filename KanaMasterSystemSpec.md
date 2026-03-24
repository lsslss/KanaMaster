# 🇯🇵 Kana Master 全系統規格說明書

## 1. 系統總覽 (System Overview)
Kana Master 是一個基於 AI 驅動的日語學習生態系統，旨在提供高品質的神經網路語音練習環境。系統結合了「雲端存儲」、「AI 課程生成」、「本地高品質語音運算」與「行動端離線學習」四大特色。

### 1.1 系統組成
* **語言學習器 (index.html v4.2)**：終端學習介面，支援離線高品質語音。
* **語音庫管理中心 (Manager.html v4.6)**：語音生成與雲端同步管理工具。
* **GAS 後端服務 (code.gs v4.2)**：連通 Google 試算表與雲端硬碟的橋樑。
* **課程資料規格 (Lesson Spec v3.0)**：統一的資料交換格式。
* **AI 課程專家 GEM (Prompt v3.2)**：專門負責產出標準格式課程的 AI 指令。

---

## 2. 組件規格詳述

### 2.1 語言學習器 (index.html)
* **技術棧**：React 18, Tailwind CSS, Lucide Icons, IndexedDB (本地存儲)。
* **核心功能**：
    * **混合語音策略**：優先嘗試本地 IndexedDB 語音 -> 雲端硬碟快取 -> 系統內建 TTS。
    * **資源管理**：支援一鍵下載完整課程語音包，實現全離線練習。
    * **UI 呈現**：完全還原 v3.9 經典佈局，支援 Ruby 文字標記、例句區塊及筆記顯示。
    * **學習模式**：支援「循序 (Order)」與「隨機 (Shuffle)」雙模式切換。

### 2.2 語音庫管理中心 (Manager.html)
* **技術棧**：React 18, Tailwind CSS, Python Micro-server (建議運行環境)。
* **核心功能**：
    * **多引擎支援**：支援本地端 VOICEVOX (擬真)、Google 代理 (極速) 及 Gemini TTS (頂級音質)。
    * **自動化流程**：自動分析雲端庫存缺口，僅針對缺失項目進行批量補完。
    * **診斷工具**：內建連線測試功能，可排除 CORS 與 CPU 運算超時問題。

### 2.3 GAS 後端服務 (code.gs)
* **環境**：Google Apps Script。
* **主要 API 介面**：
    * `sync`：讀取試算表所有分頁並轉化為課程 JSON。
    * `tts`：從雲端硬碟檢索已存檔的語音 Base64 數據。
    * `save_audio`：將生成的語音 Base64 存入指定雲端資料夾。
    * `proxy_google_tts`：伺服器端代理抓取 Google 翻譯語音，規避瀏覽器 CORS 限制。

---

## 3. 資料結構規格 (v3.0)
所有課程資料必須遵循以下欄位定義：

| 欄位名稱 | 說明 | 備註 |
| :--- | :--- | :--- |
| **unit** | 單元名稱 | 分類與篩選用 |
| **category** | 項目種類 | kana (8xl), word (6xl), sentence (4xl) |
| **primary** | 主文字 | 支援 `漢[かん]字[じ]` 格式 |
| **reading** | 主發音 | 純假名，供 API 讀取用 |
| **meaning** | 翻譯 | 中文意義 |
| **secondary** | 例句/例字 | 支援 `漢[かん]字[js]` 格式 |
| **secondaryReading** | 例句發音 | 核心：語音引擎朗讀句子的來源 |
| **notes** | 筆記/字源 | 顯示於卡片背面下方 |
| **emoji** | 記憶符號 | 視覺輔助 |

---

## 4. 運行流程圖 (Workflow)
1.  **內容生成**：利用 Prompt v3.2 讓 Gemini 產出符合規格的 CSV，貼入 Google 試算表。
2.  **語音補完**：啟動本地 VOICEVOX 與 Manager.html，點擊「開始自動補完」，將高品質語音存入雲端。
3.  **雲端同步**：開啟手機端 index.html，貼上 GAS URL 並點擊「同步課程」。
4.  **離線部署**：在手機端點擊「下載高品質離線包」，將所有資源固化於手機中。

---

## 5. 系統環境需求
* **本地管理端**：需安裝 Python 3 (運行 http.server) 及 VOICEVOX (CPU/GPU 模式)。
* **使用者終端**：任何支援 HTML5 與 IndexedDB 的現代行動瀏覽器 (Chrome, Safari)。
* **雲端平台**：Google Drive 與 Google Sheets。

---
**文件更新日期**：2025-03-23
**版本**：Kana Master Ecosystem v4.6
