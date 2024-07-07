---
title: TypeScriptのinterfaceとtypeの使い分け
date: 2024-07-06
---

TypeScript は、JavaScript に静的型付けを追加することで、コードの安全性と可読性を向上させるための強力なツールです。TypeScript では、オブジェクトの型を定義するために`interface`と`type`の二つの構文が提供されています。それぞれの構文には独自の特徴があり、適切な使い分けが重要です。本記事では、`interface`と`type`の違いと、それぞれの適切な使い方について詳しく解説します。

## interface とは？

`interface`は、主にオブジェクトの形状を定義するために使用されます。クラスやオブジェクトのプロパティとその型を定義し、型チェックを行う際に非常に便利です。

### 基本的な使い方

```typescript
interface Person {
  name: string
  age: number
}
```

このように、`interface`を使ってオブジェクトのプロパティとその型を定義します。`interface`はクラスに対しても適用可能で、クラスが特定の構造を持つことを保証できます。

```typescript
class Employee implements Person {
  name: string
  age: number
  position: string

  constructor(name: string, age: number, position: string) {
    this.name = name
    this.age = age
    this.position = position
  }
}
```

### interface の利点

1. **継承が容易**: `interface`は他のインターフェースを継承し、新しいインターフェースを作成できます。
2. **クラスとの相性が良い**: クラスに対して明確な型を定義でき、型安全性を高めることができます。
3. **自動マージ**: 同じ名前の`interface`が複数定義された場合、自動的にマージされます。これにより、異なるモジュールやライブラリの型定義を拡張することが容易になります。

## type とは？

`type`は、より柔軟で多様な型定義を可能にする構文です。単純なオブジェクト型の定義に加え、ユニオン型、インターセクション型、タプルなど、さまざまな型エイリアスを作成することができます。

### 基本的な使い方

```typescript
type ID = string | number

type Point = {
  x: number
  y: number
}

type Position = Point & {
  z: number
}
```

### type の利点

1. **柔軟性**: 単純なオブジェクト型だけでなく、複雑な型のエイリアスを定義できます。
2. **コンポジションが簡単**: 型の組み合わせ（ユニオン型やインターセクション型）を簡単に定義できます。
3. **再定義不可**: 同じ名前の`type`を再定義することはできません。これにより、意図しない型の変更を防ぐことができます。

## interface と type の使い分け

### オブジェクトの形状を定義する場合

オブジェクトの形状（プロパティとその型）を定義する場合は、`interface`を使用する方が一般的です。特に、継承や自動マージが必要な場合に便利です。

```typescript
interface User {
  name: string
  age: number
}
```

### 複雑な型定義が必要な場合

柔軟な型エイリアスや複雑な型の定義が必要な場合は、`type`を使用します。特にユニオン型やインターセクション型を扱う場合には`type`が適しています。

```typescript
type Result = Success | Failure

type Success = {
  success: true
  value: number
}

type Failure = {
  success: false
  error: string
}
```

### クラスに対して型を定義する場合

クラスに対して型を定義する場合は、`interface`を使用する方が適しています。クラスが特定のインターフェースを実装することを保証できます。

```typescript
interface Animal {
  speak(): void
}

class Dog implements Animal {
  speak() {
    console.log('Woof!')
  }
}
```

## 結論

`interface`と`type`はそれぞれ異なる特徴と利点を持っています。`interface`は主にオブジェクトの形状を定義し、クラスと組み合わせて使用する場合に適しています。一方、`type`はより柔軟で多様な型定義を可能にし、ユニオン型やインターセクション型などの複雑な型を扱う場合に適しています。プロジェクトの要件に応じて、これらの構文を使い分けることで、より安全で読みやすい TypeScript コードを書くことができるでしょう。

---

※ この記事は生成 AI によって作成され、一部を編集したものです。
