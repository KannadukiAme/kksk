# Windows QA问题集

- 在powershell下执行yarn init出现拒绝执行的错误后，如何解决？

以管理员模式打开powershell，执行以下命令，允许本地执行脚本

```
Set-ExecutionPolicy RemoteSigned
```
