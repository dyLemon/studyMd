const fs = require("fs");
const styleType = ["less", "scss"];
const CSS = "css";
/**
 * 删除目录下与less/scss文件同名的css文件。
 * @param {*} paramsPath
 */
function rmDir(paramsPath) {
  new Promise(async (resolve) => {
    let files = [];
    let styleFile = [];
    let cssFile = [];
    if (fs.existsSync(paramsPath)) {
      files = await fs.readdirSync(paramsPath);
      files.forEach(async (file) => {
        //拼接地址
        const newPath = paramsPath + "/" + file;
        //判断打开是文件还是文件夹
        if (fs.statSync(newPath).isDirectory()) {
          await rmDir(newPath);
        } else {
          //文件
          const fileNameSplit = file.split(".");
          if (
            styleType.includes(fileNameSplit[1]) ||
            fileNameSplit[1] === CSS
          ) {
            styleFile.push({
              name: fileNameSplit,
              path: paramsPath,
            });
          }
          if (fileNameSplit[1] === CSS) {
            cssFile.push(newPath);
          }
        }
      });

      styleFile.forEach(async (item) => {
        const fileNameSplit = item.name;
        if (styleType.includes(fileNameSplit[1])) {
          const newPath = `${item.path}/${fileNameSplit[0]}.${CSS}`; //拼接成css
          //删除相同得
          if (cssFile.includes(newPath)) {
            await fs.unlinkSync(newPath);
          }
        }
      });

      resolve();
    }
  });
}
rmDir("./src");
