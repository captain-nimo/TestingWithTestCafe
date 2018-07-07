import {Selector} from 'testcafe';
import config from './lobLaw_config.json';

export async function closingIframe(t) {
   
    await t
        // Switching to iframe and closing it
        .switchToIframe(Selector(config.iframe))
        .click(config.iframId)
        .switchToMainWindow();
}

export async function search(t) {
    
    await t
        // Inserting search text in the search bar
        .typeText(config.searchBarId, config.searchString)
        // Start searching
        .pressKey('enter')
        // Checking the search result
        .expect(Selector(config.searchResult).innerText).contains(config.searchResultString);
}

export async function sort(t) {
    
        // Sorting search results from the highest price to the lowest.
    await t
        .click(Selector(config.descButton))
        .expect(Selector(config.sortSelection));
    
    await t
        const itemPrice = Selector(config.price)
        const itemCount = await itemPrice.count
        const price = new Array(itemCount);
        
        // Adding price values in the array
        for (var i = 0; i < itemCount; i++) {
            await t
            price.push((Selector(config.price).nth(i)));
        }
    
        // Checking whether the prices are sorted
        for (var i = 0; i < itemCount; i++) {
            await t
                .expect(price[i] >= price[i+1]);
        }
}