# vue-popup
#### 弹出层组件
![](//cdn.51talk.com/apollo/images/5ab7bbbcbfb12ee14319b491ffea686c.png)
## install
NPM
```
npm install @nat/vue-popup
```
## 用法
```
 <div id="project-features">
         <popup v-model="show"></popup>
    </div>
```
```
<script>
    import popup from '@nat/vue-popup';

    export default {
        data () {
            show: true
        },
        components: {
            popup
        }
    };
</script>
```
#### event
事件名 | 说明 | 参数值 | 类型
---|---|---|---
close | 关闭弹层| false | Boolean
## 启动
```
npm run dev
```
## 编译
```
npm run build-lib
```
