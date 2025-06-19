---
title: 【React / Next.js / TypeScript 開発で今押さえておくべきこと（2025年版）】

date: 2025-06-19
---


■ 1. React の基礎・本質
- Strict Modeの意味と影響（開発中の意図的な再レンダリング）
- useEffectの依存配列・クリーンアップ・設計判断
- 再レンダリングの原因特定と最適化（React DevTools, Profiler）
- メモ化（memo/useMemo/useCallback）の正しい使いどころ

■ 2. Next.js（App Router 前提）
- App RouterとPage Routerの違い
- Server Components（RSC）とClient Componentsの責務分離
- Server Actions：`"use server"`とmutationの書き方
- Layout.tsxとTemplate.tsxの役割の違い
- Streaming UIの設計（suspense / loading.tsx）

■ 3. 型安全・TypeScript
- Props/Stateの型定義と再利用
- Union/Discriminated Unionを使った型安全なコンポーネント設計
- APIレスポンスの型（zod / openapi-typescript などでスキーマ生成）
- Utility型の使いこなし（Partial, Omit, Record, ReturnType等）

■ 4. 状態管理の最適解
- Zustand / Jotai / Redux Toolkitのどれを選ぶかの基準
- Server Component中心でどう状態を持たせるか（URL param / formAction）
- Context APIはいつ使う？ → ThemeやAuthなど「グローバルで滅多に変わらない値」

■ 5. API連携とデータ取得
- fetch / axiosの違いより「キャッシュ方針（SWR/React Query/独自）」の設計が重要
- `cache`, `revalidate`, `fetch`のNext.jsオプション理解（App Router向け）
- Form Actionでのmutation、React Server Actionsとの連携方法

■ 6. UI設計とアクセシビリティ
- コンポーネント設計の責務分離（Presentational / Container / Domain Model）
- ARIA属性、フォーカスマネジメント
- デザインシステムとの連携（Shadcn UI / Radix UIなど）

■ 7. テスト戦略
- Jest + React Testing Library（ユースケースベース）
- Storybook + Play（インタラクティブテスト）
- Playwright（E2E）との住み分け
- RSC環境におけるテストの落とし所

■ 8. パフォーマンス最適化
- Dynamic Import + Suspense
- Lazy loading（画像、チャートなど）
- Bundle分析（Next.jsのanalyzeツール）
- RSCとStreamingの活用で「初期LCP」を減らす工夫

■ 9. 開発体験
- ESLint + Prettier + TypeScriptの統合（ルール整理）
- `tsx`, `*.d.ts`, `@types/`の理解と整備
- Turbopack or Viteでのビルドチューニング
- Git hooks（lint-staged, husky）でCI品質向上

■ 10. デプロイ・環境分離
- Vercelでの環境分け（Preview/Production）
- .env.local, .env.productionの使い分け
- SSG, ISR, SSR, RSCの最適な選定とパフォーマンス影響
- 