---
title: **DBのトランザクションとロック**
date: 2026-06-24
---

# DB のトランザクションとロック

現場の Web アプリケーション開発において重要な「トランザクション」「ロック」の概念・使い方・SQL 例を網羅的に解説。

## 🧱 1. トランザクションとは

- データベースにおける一連の処理の単位
- 整合性を保証するための不可欠な機構
- ACID 特性（後述）に従う

## 🧪 2. ACID 特性

- **Atomicity（原子性）**: 全処理が成功 or 全て無効
- **Consistency（一貫性）**: データの整合性を保つ
- **Isolation（独立性）**: 他トランザクションの影響を遮断
- **Durability（永続性）**: コミット後の変更は保持される

## 🔹 3. トランザクションの基本構文（SQL）

```sql
START TRANSACTION;
-- 任意の処理
COMMIT;    -- 正常終了
ROLLBACK;  -- 異常終了
```

## 🤯 4. トランザクション分離レベル（Isolation Level）

| 分離レベル       | 特徴                                       | ユースケース例 |
| ---------------- | ------------------------------------------ | -------------- |
| READ UNCOMMITTED | ダーティリードあり、整合性保証なし         | 基本使わない   |
| READ COMMITTED   | コミット済みのみ読める                     | ブログ表示系   |
| REPEATABLE READ  | 同じ SELECT 結果は変わらない（幻影行あり） | EC 在庫確認    |
| SERIALIZABLE     | 完全直列化。最も厳密で低速                 | 金融系処理     |

### 🔧 設定例（SQL）

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT stock FROM products WHERE id = 123 FOR UPDATE;
-- 処理
COMMIT;
```

## 🔐 5. ロックの種類と用途

### 排他ロック（Exclusive Lock / X Lock）

- 他トランザクションの読み書きをブロック
- **用途**: 在庫減算、会員ランク加算

```sql
SELECT * FROM products WHERE id = 1 FOR UPDATE;
```

### 共有ロック（Shared Lock / S Lock）

- 読み取りは OK、書き込みは禁止
- **用途**: 安全な読み取り用

```sql
-- MySQL
SELECT * FROM products WHERE id = 1 LOCK IN SHARE MODE;

-- PostgreSQL
SELECT * FROM products WHERE id = 1 FOR SHARE;
```

## ⚙️ 6. ロックの粒度

- **テーブルロック**: 全体に影響、基本非推奨
- **行ロック**: 高い並行性、InnoDB や PostgreSQL で使用
- **ページロック**: 一部 DB エンジン内部向け（明示的制御は稀）

## 🔀 7. ロック競合とデッドロック

- **ロック競合**: 同一リソースにアクセスし待ち状態になる
- **デッドロック**: 相互にロック取得待ちで停止

### ✅ 対策

- ロック取得順序の統一
- トランザクション時間を短く
- タイムアウト設定
- DB の自動デッドロック検知（PostgreSQL/MySQL）

## 🧠 8. 悲観的ロックと楽観的ロック

### 悲観的ロック（Pessimistic Locking）

- 事前にロックしてから処理
- 高い衝突可能性に備える

```sql
START TRANSACTION;
SELECT stock FROM products WHERE id = 123 FOR UPDATE;
UPDATE products SET stock = stock - 1 WHERE id = 123;
COMMIT;
```

### 楽観的ロック（Optimistic Locking）

- 更新時に`version`等で競合チェック
- 軽量・非同期向き

```sql
UPDATE
```
