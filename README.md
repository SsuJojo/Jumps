# Jumps

一个用于承载**轻量跳转页、状态页、设备页和历史入口页**的静态网页仓库。

这个项目不是完整 Web 应用，而更像我早期自建服务体系里的“胶水层”：某些服务需要一个简单页面做入口、跳转、状态展示或兼容处理时，就放在这里。

## 当前仓库包含

- `auth/`：历史认证 / 跳转相关页面
- `devices/`：设备相关入口页
- `server-cover/`：服务覆盖 / 占位页
- `test-cover/`：测试页面
- `CSS/`、`JS/`：共享静态资源

## 历史入口

仓库 README 曾长期保留以下校园项目入口：

- 金中海湾食堂网站：<https://jzhw.zszs.uno/canteen/>
- 金中海湾校园 BBS：<https://jzhw.zszs.uno/bbs/>

这些地址属于历史部署记录，当前是否仍然在线取决于对应服务与 DNS 状态。

## 使用方式

项目由纯静态文件组成，不需要构建：

```bash
git clone https://github.com/SsuJojo/Jumps.git
cd Jumps
```

使用任意静态服务器托管需要的目录即可。

## 项目状态

**Legacy utility collection / 历史静态工具集合。**

这个仓库的价值主要是保留早期个人服务和校园项目中的一些小型入口实现，不作为当前主力项目展示，也不会把其中的跳转页包装成独立产品。

## License

见 [`LICENSE`](./LICENSE)。
