const doGet = () => 
    HtmlService.createTemplateFromFile('views/index')
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setFaviconUrl("https://cdn-icons-png.flaticon.com/128/3081/3081530.png")

const include = (ruta) => HtmlService.createHtmlOutputFromFile(ruta).getContent();