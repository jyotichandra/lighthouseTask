const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    const selectors = {
        tablesPageLink: 'li.page-item-13 > a',
        tableDetailsPageLink: 'div.product-121 img',
        addToCartButton: '#primary button',
        checkoutPageLink: 'li.page-item-31 > a',
        formButton: 'div.form-buttons > input',
        companyNameInput: 'form > div:nth-of-type(2) > div:nth-of-type(2) input',
        fullNameInput: 'div:nth-of-type(2) > div:nth-of-type(3) input',
        addressInput: 'div:nth-of-type(2) > div:nth-of-type(4) input',
        postalCodeInput: 'div:nth-of-type(2) > div:nth-of-type(5) input',
        cityInput: 'div:nth-of-type(2) > div:nth-of-type(6) input',
        countrySelect: 'div:nth-of-type(2) > div.dropdown_country select',
        stateSelect: 'div:nth-of-type(2) > div.dropdown_state select',
        phoneNumberInput: 'div:nth-of-type(2) > div:nth-of-type(9) input',
        emailInput: 'div:nth-of-type(2) > div.email input',
        commentInput: 'form > div:nth-of-type(2) textarea',
        finalCheckoutButton: 'div.cart_button > input'
    };
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    const lhApi = await import('lighthouse');
    const flags = {
        screenEmulation: {
            disabled: true
        }
    }
    const config = lhApi.desktopConfig;
    const lhFlow = await lhApi.startFlow(page, { name: 'LighthouseTask', config, flags });
    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1212,
            height: 695
        })
    }
    await lhFlow.startNavigation();
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('http://localhost/');
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    await lhFlow.startNavigation();

    // Navigate to Tables Page
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator(selectors.tablesPageLink)
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click();
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    await lhFlow.startNavigation();

    // Open a specific table details page
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator(selectors.tableDetailsPageLink)
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click();
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    await lhFlow.startTimespan();

    // Add to cart Product
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.addToCartButton)
        ])
            .setTimeout(timeout)
            .click();
    }
    await lhFlow.endTimespan();
    await lhFlow.startNavigation();

    // Checkout Page
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator(selectors.checkoutPageLink)
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click();
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    await lhFlow.startNavigation();

    // Enter Checkout Details 
    // Form Button
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }

        await puppeteer.Locator.race([
            targetPage.locator(selectors.formButton)
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click();
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    await lhFlow.startTimespan();

    // Filling Company Name 
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.companyNameInput)
        ])
            .setTimeout(timeout)
            .click();
    }

    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.companyNameInput)
        ])
            .setTimeout(timeout)
            .fill('EPAM');
    }
    // Filling Full Name
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.fullNameInput)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.fullNameInput)
        ])
            .setTimeout(timeout)
            .fill('Arvind Singh');
    }

    // Filling address
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.addressInput)
        ])
            .setTimeout(timeout)
            .click();
    }

    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.addressInput)
        ])
            .setTimeout(timeout)
            .fill('Varanasi');
    }
    // Filling Postal Code
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.postalCodeInput)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.postalCodeInput)
        ])
            .setTimeout(timeout)
            .fill('221345');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    // Filling City name
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.cityInput)
        ])
            .setTimeout(timeout)
            .click();
    }

    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.cityInput)
        ])
            .setTimeout(timeout)
            .fill('Varanasi');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.countrySelect)
        ])
            .setTimeout(timeout)
            .click();
    }
    // Selecting Country Name
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.countrySelect)
        ])
            .setTimeout(timeout)
            .fill('IN');
    }
    
   
    // Select state Name
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.stateSelect)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.stateSelect)
        ])
            .setTimeout(timeout)
            .fill('IN_WB');
    }
    // Filling Phone Number
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.phoneNumberInput)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.phoneNumberInput)
        ])
            .setTimeout(timeout)
            .fill('7052280194');
    }
    // Filling mail address
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.emailInput)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.emailInput)
        ])
            .setTimeout(timeout)
            .fill('arvind@gmail.com');
    }
    // Filling comment
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.commentInput)
        ])
            .setTimeout(timeout)
            .click();
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(selectors.commentInput)
        ])
            .setTimeout(timeout)
            .fill('NA');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('a');
    }
    await lhFlow.endTimespan();
    await lhFlow.startNavigation();
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator(selectors.finalCheckoutButton)
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click();
        await Promise.all(promises);
    }
    await lhFlow.endNavigation();
    const lhFlowReport = await lhFlow.generateReport();
    fs.writeFileSync(__dirname + '/test.report.html', lhFlowReport)

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
