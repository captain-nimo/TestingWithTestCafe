import {Selector} from 'testcafe';
import config from './config.json';

export async function selectLocation(t) {
    
    await t
        // Select location
        .click(Selector(config.SelectProvince).withText(config.provinceName));
}

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

export async function checkDealBadge(t) {
    
    // Checking deal badge in the result page
    await t
        .expect(Selector(config.badge).exists).ok();
    
}