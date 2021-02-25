#### 创建项目
```
create-react-app xxx
```

#### 项目依赖
```
yarn add mobx mobx-react
```

#### 项目预览
```
yarn 
yann start
```

#### 启用装饰器语法支持

#####  方式一:
```
  1. npm run eject
  2. npm install @babel/plugin-proposal-decorators
  3. package.json

    "babel": {
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        ]
    }
```  

#####  方式二:
``` 
  1. npm install react-app-rewired @babel/plugin-proposal-decorators customize-cra

  2. 在项目根目录下创建 config-overrides.js

      const { override, addDecoratorsLegacy } = require("customize-cra");

      module.exports = override(addDecoratorsLegacy());
  
  3. package.json

      "scripts": {
          "start": "react-app-rewired start",
          "build": "react-app-rewired build",
          "test": "react-app-rewired test",
      }
```  

#####  解决vscode编辑器关于装饰器语法的警告

  "javascript.implicitProjectConfig.experimentalDecorators": true
            