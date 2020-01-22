# 使用gka生成帧动画
## 安装
```
npm i gka -S
```
## 快速开始
```
npx gka ./gka/imgs-lantern
```

## command命令
```
gka <dir> [options]
```

## options参数选项
```
-d, --dir <string>            #  图片文件夹地址

-u, --unique [boolean]        #  开启相同图片复用优化

-c, --crop [boolean]          #  开启空白裁剪优化

-s, --sprites [boolean]       #  开启合图优化

-m, --mini [boolean]          #  开启图片压缩

-p, --prefix [string]         #  文件重命名前缀

-t, --template <string>       #  生成动画文件模板 默认 css ，可选模见 Templates 模板列表

-f, --frameduration <number>  #  每帧时长，默认 0.04

-i, --info [boolean]          #  开启输出信息文件

-o, --output <string>         #  指定生成目录地址

-a, --algorithm <string>      #  合图布局模式 默认 left-right，可选 binary-tree | top-down ..

--bgcolor <string>            #  为图片增加背景色，可选，支持格式：'rgb(255,205,44)'、 '#ffcd2c'

--count <number>              #  生成多合图，指定几张图片合成一张合图，可选

--ratio <number>              #  生成指定的N倍图动画，如 --ratio 2 支持retina屏幕的2倍图动画， 可选

--split [boolean]             #  开启图片空白拆分优化，与 -t canvas 结合使用

--diff [boolean]              #  开启图片像素差优化，与 -t canvas 结合使用
```