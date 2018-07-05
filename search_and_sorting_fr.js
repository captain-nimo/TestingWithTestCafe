import {Selector} from 'testcafe';

fixture('Testing LobLaw Website in french')
    .page('https://www.loblaws.ca/');

test('Search apples and sort the search results in French', async t => {
    
    await t
        // Maximize browser window
        .maximizeWindow();
    
    await t
        // Switching to iframe and closing it
        .wait(5000)
        .switchToIframe(Selector('.sl-show-animation .sl-frame'))
        .click('#i-1')
        .switchToMainWindow();
    
    await t
        .click(Selector('.header-bar [href="\/PickUpStore\/language"]'));
        
    await t
        // Inserting 'apples' text in the search bar
        .typeText('#search-bar', 'pommes')
        // Start searching
        .pressKey('enter')
        
        // Checking the search result
        .expect(Selector('.term-result-found').innerText).contains('"POMMES"');
    
        // Sorting search results from highest price to lowest price.
        const sorting = Selector('button')
        .withText('Prix : élevé à faible')
    
        const selected = Selector('.btn-sort-link  selected');
    
    await t
        // Clicking the 'price-desc' button
        .click(sorting);
    
    await t
        .expect(selected);
    
    await t
        const itemPrice = Selector('.reg-price-text')
        const itemCount = await itemPrice.count
        const price = new Array(itemCount);
        
        // Adding price values in the array
        for (var i = 0; i < itemCount; i++) {
            await t
            price.push((Selector('.reg-price-text').nth(i)));
        }
        
        // Checking whether the prices are sorted
        for (var i = 0; i < itemCount; i++) {
            await t
                .expect(price[i] >= price[i+1]);
        }
});
