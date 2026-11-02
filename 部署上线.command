#!/bin/zsh
cd "$(dirname "$0")" || exit 1
echo "正在构建并部署到线上，约 1 分钟，请勿关闭窗口…"
npm run deploy
echo
echo "========== 完成，线上地址：https://papaya-blancmange-11546c.netlify.app =========="
echo "按回车键关闭窗口。"
read
