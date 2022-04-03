const doGet = () =>
    HtmlService.createTemplateFromFile('frontend/index')
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag(
            "viewport",
            '"width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"'
        )
        .setTitle("proyecto QRhodes")
        .setFaviconUrl("https://cdn-icons-png.flaticon.com/128/3081/3081530.png")

const include = (ruta) =>
    HtmlService.createHtmlOutputFromFile(ruta).getContent();