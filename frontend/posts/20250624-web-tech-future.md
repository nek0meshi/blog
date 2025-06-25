---
title: 2030年までのWeb開発
date: 2025-06-24
---

ChatGPT と予想した Web 開発の現在と未来.

- Java/C#など、隣近所の界隈はわからないので割愛する
- 現状の観測範囲からできる範囲で予測するだけ（結局「わからない」が答えになってしまうので）.

### 現在

- Backend:
  - PHP/Rails が主流だったが、移行が始まっている.
  - Go が増えてきていて、軌道に乗った印象がある. ベンチャー界隈の Go の求人は PHP と同じくらいかも.
  - TypeScript は、Next.js とのフルスタック構成や Nest.js などでの独立 Backend 構成など.
    - Frontend との型の共有や強み. Next.js は 1 プロジェクトで完結も強み.
- Frontend:
  - TypeScript 一択.
  - React 全盛.
    - SPA 向けに Vite, RSC 対応（または将来的にこれを見据えた）Next.js の使い分け
  - Vue.js は衰退気味.

### 将来

- Backend

  - Go/TypeScript/Rust が主流になる
    - パフォーマンスと実装の簡易さのバランスが良い Go は強そう
    - Front と共通で TypeScript&Rust が主流になり、Go が減っていく可能性も？
  - PHP/Rais は保守のみ

- Frontend:
  - TypeScript の立ち位置は変わらず
  - 思い処理向けの WebAssembly の普及が進む
    - Rust
    - TypeScript と共存する
  - React は存在感を残しつつ、Solid/Qwik がかなり増える
    - React は多機能でエコシステムも巨大だが、パフォーマンスの問題がある
    - React の正統進化の Solid, 初期表示に大きなアドバンテージのある Qwik が台頭していく
