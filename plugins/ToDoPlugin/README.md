# capacitor-todo-plugin

ToDo Plugin

## Install

```bash
npm install capacitor-todo-plugin
npx cap sync
```

## API

<docgen-index>

* [`getAll()`](#getall)
* [`getOne(...)`](#getone)
* [`upsert(...)`](#upsert)
* [`delete(...)`](#delete)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getAll()

```typescript
getAll() => Promise<{ todos: ToDoItem[]; }>
```

**Returns:** <code>Promise&lt;{ todos: ToDoItem[]; }&gt;</code>

--------------------


### getOne(...)

```typescript
getOne(options: { id: number; }) => Promise<{ todo: ToDoItem; }>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: number; }</code> |

**Returns:** <code>Promise&lt;{ todo: <a href="#todoitem">ToDoItem</a>; }&gt;</code>

--------------------


### upsert(...)

```typescript
upsert(todo: UpsertOptions) => Promise<void>
```

| Param      | Type                                                    |
| ---------- | ------------------------------------------------------- |
| **`todo`** | <code><a href="#upsertoptions">UpsertOptions</a></code> |

--------------------


### delete(...)

```typescript
delete(options: { id: number; }) => Promise<void>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: number; }</code> |

--------------------


### Interfaces


#### ToDoItem

| Prop          | Type                 |
| ------------- | -------------------- |
| **`id`**      | <code>number</code>  |
| **`name`**    | <code>string</code>  |
| **`dueDate`** | <code>number</code>  |
| **`done`**    | <code>boolean</code> |


### Type Aliases


#### UpsertOptions

<code><a href="#pick">Pick</a>&lt;<a href="#todoitem">ToDoItem</a>, "done" | "dueDate" | "name"&gt; & { id?: number; }</code>


#### Pick

From T, pick a set of properties whose keys are in the union K

<code>{ [P in K]: T[P]; }</code>

</docgen-api>
