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
        .click(config.iframeId)
        .switchToMainWindow();
}


export async function searchItem(t, searchString, searchResultString) {
    
    await t
        // Inserting search text in the search bar
        .typeText(config.searchBarId, searchString)
    
        // Start searching
        .pressKey('enter')
    
        // Checking the search result
        .expect(Selector(config.searchResult).innerText).contains(searchResultString);
}

export async function checkDealBadge(t) {
    
    // Checking deal badge in the result page
    await t
        .expect(Selector(config.badge).exists).ok();
    
}