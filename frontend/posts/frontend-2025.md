---
title: 【React / Next.js / TypeScript 開発で今押さえておくべきこと（2025年版）】
date: 2025-06-19
---

■ 1. React の基礎・本質

- Strict Mode の意味と影響（開発中の意図的な再レンダリング）
- useEffect の依存配列・クリーンアップ・設計判断
- 再レンダリングの原因特定と最適化（React DevTools, Profiler）
- メモ化（memo/useMemo/useCallback）の正しい使いどころ

■ 2. Next.js（App Router 前提）

- App Router と Page Router の違い
- Server Components（RSC）と Client Components の責務分離
- Server Actions：`"use server"`と mutation の書き方
- Layout.tsx と Template.tsx の役割の違い
- Streaming UI の設計（suspense / loading.tsx）

■ 3. 型安全・TypeScript

- Props/State の型定義と再利用
- Union/Discriminated Union を使った型安全なコンポーネント設計
- API レスポンスの型（zod / openapi-typescript などでスキーマ生成）
- Utility 型の使いこなし（Partial, Omit, Record, ReturnType 等）

■ 4. 状態管理の最適解

- Zustand / Jotai / Redux Toolkit のどれを選ぶかの基準
- Server Component 中心でどう状態を持たせるか（URL param / formAction）
- Context API はいつ使う？ → Theme や Auth など「グローバルで滅多に変わらない値」

■ 5. API 連携とデータ取得

- fetch / axios の違いより「キャッシュ方針（SWR/React Query/独自）」の設計が重要
- `cache`, `revalidate`, `fetch`の Next.js オプション理解（App Router 向け）
- Form Action での mutation、React Server Actions との連携方法

■ 6. UI 設計とアクセシビリティ

- コンポーネント設計の責務分離（Presentational / Container / Domain Model）
- ARIA 属性、フォーカスマネジメント
- デザインシステムとの連携（Shadcn UI / Radix UI など）

■ 7. テスト戦略

- Jest + React Testing Library（ユースケースベース）
- Storybook + Play（インタラクティブテスト）
- Playwright（E2E）との住み分け
- RSC 環境におけるテストの落とし所

■ 8. パフォーマンス最適化

- Dynamic Import + Suspense
- Lazy loading（画像、チャートなど）
- Bundle 分析（Next.js の analyze ツール）
- RSC と Streaming の活用で「初期 LCP」を減らす工夫

■ 9. 開発体験

- ESLint + Prettier + TypeScript の統合（ルール整理）
- `tsx`, `*.d.ts`, `@types/`の理解と整備
- Turbopack or Vite でのビルドチューニング
- Git hooks（lint-staged, husky）で CI 品質向上

■ 10. デプロイ・環境分離

- Vercel での環境分け（Preview/Production）
- .env.local, .env.production の使い分け
- SSG, ISR, SSR, RSC の最適な選定とパフォーマンス影響
-
