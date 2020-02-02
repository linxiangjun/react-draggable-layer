<div align="center">

![效果动画](https://s2.ax1x.com/2020/01/28/1MnWxf.gif)

</div>

<h1 align="center">react-draggable-layer</h1>

<div align="center">

基于 TypeScript + React Hooks 开发的可拖拽弹层

<a href="https://www.npmjs.com/package/react-draggable-layer">
  <img src="https://img.shields.io/npm/v/react-draggable-layer" alt="npm package" />
</a>
<a href="https://www.npmjs.com/package/react-draggable-layer">
  <img src="https://img.shields.io/bundlephobia/min/react-draggable-layer" alt="npm size" />
</a>
<a href="https://www.npmjs.com/package/react-draggable-layer">
  <img src="https://img.shields.io/npm/l/react-draggable-layer" alt="npm size" />
</a>

</div>

## Example

```bash
# install project packages
npm install

# install example packages
cd examples
npm install

# run start
npm run start
```

## Installation

```bash
npm install --save-dev react-draggable-layer
```

## Usage

```ts
import DraggableLayer from "react-draggable-layer";

const App = () => <DraggableLayer />;
```

## API

| name      | description                                                            | type      |
| --------- | ---------------------------------------------------------------------- | --------- |
| children  | custom draggable layer content                                         | ReactNode |
| titleName | The draggable layer's title                                            | string    |
| visible   | Whether the draggable layer is visible or not                          | boolean   |
| onClose   | Specify a function that will be called when a user clicks close button | function  |

# License

MIT, see the [LICENSE](/LICENSE.md) file for detail.
