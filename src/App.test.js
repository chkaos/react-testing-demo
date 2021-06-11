import puppeteer from 'puppeteer'
import { sleep } from '../tests/utils'

describe('App e2e tests', () => {
    test('Let\'s play!', async () => {
        let browser
        try {
            browser = await puppeteer.launch({
                headless: false
            });
            let page = await browser.newPage()
            await page.goto('http://localhost:3000');

            // First click on board
            await page.click("#root > div:nth-child(1) > button:nth-child(1)");
            const displayInfo = await page.waitForSelector('.game-status')
            let value = await displayInfo.evaluate(el => el.textContent);
            // Game hint should be 'Next Player: O'
            expect(value).toBe('Next Player: O')
            await sleep (1000)

            await page.click("#root > div:nth-child(1) > button:nth-child(5)");
            await page.click("#root > div:nth-child(1) > button:nth-child(6)");
            await page.click("#root > div:nth-child(1) > button:nth-child(2)");
            await page.click("#root > div:nth-child(1) > button:nth-child(8)");
            await page.click("#root > div:nth-child(1) > button:nth-child(3)");
            await page.click("#root > div:nth-child(1) > button:nth-child(9)");
            await page.click("#root > div:nth-child(1) > button:nth-child(7)");

            // First game completed. Should display 'Winner: O'.
            value = await displayInfo.evaluate(el => el.textContent);
            expect(value).toBe('Winner: O')
            await sleep (1500)

            // Click reset button with ID reset
            await page.click("#reset");

            await page.click("#root > div:nth-child(1) > button:nth-child(1)");
            await page.click("#root > div:nth-child(1) > button:nth-child(2)");
            await page.click("#root > div:nth-child(1) > button:nth-child(4)");
            await page.click("#root > div:nth-child(1) > button:nth-child(7)");
            await page.click("#root > div:nth-child(1) > button:nth-child(5)");
            await page.click("#root > div:nth-child(1) > button:nth-child(6)");
            await page.click("#root > div:nth-child(1) > button:nth-child(9)");

            // Second game completed. Should display 'Winner: X'.
            value = await displayInfo.evaluate(el => el.textContent);
            expect(value).toBe('Winner: X')

        } finally {
            if (browser) {
                await browser.close();
            }
        }
    })
})