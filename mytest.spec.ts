import { test } from "@playwright/test";




test("screenshot-test", async ({ page }, testInfo) => {

    await page.goto("http://localhost:3000");
    const screen = await page.screenshot({ path: `screenshot.png` });
    // attach it
    await testInfo.attach("full page.png", { body: screen, contentType: 'image/png' });

    const fullPageClip = await page.screenshot({
        path: `full-page-clip.png`,
        clip: { x: 0, y: 0, width: 100, height: 100 }
    });
    await testInfo.attach("full page CLIPPED.png", { body: fullPageClip, contentType: 'image/png' });

    const mydiv = await page.locator("#mydiv");
    const myDivScreenshot = await mydiv.screenshot({ path: `mydiv.png` });
    await testInfo.attach("mydiv.png", { body: myDivScreenshot, contentType: 'image/png' });

    const myDivPart = await mydiv.screenshot({
        path: `mydiv-part.png`,
        //@ts-ignore
        clip: { x: 0, y: 0, width: 100, height: 100 }
    });
    await testInfo.attach("mydiv CLIPPED.png", { body: myDivPart, contentType: 'image/png' });
});