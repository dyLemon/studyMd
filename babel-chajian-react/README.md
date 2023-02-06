```

因为react脚手架官网是不支持配置的，如果想配置可以使用 

1：eject将这些配置文件暴露出来，但是事不可以逆的
2：引入react-app-rewired，customize-cra两个包。customize-cra利用react-app-rewired的config-overrides.js文件,通过导入cra，出口函数调用我们的override功能，然后在package.json命令修改命令react-app-rewired start，即可

```