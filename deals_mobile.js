import {Selector} from 'testcafe';

fixture('Testing Real Canadian Superstore Website')
    .page('https://www.realcanadiansuperstore.ca/');

test('Searching oranges and checking deals', async t => {
    
    await t
        // Re-sizing browser window
        .resizeWindowToFitDevice('iPhone 5S', {
            portraitOrientation: true
        });
    
    await t
        // Selecting location
        .click(Selector('.select-province').withText('Ontario'));
    
    await t
        // Switching to iframe and closing it
        .switchToIframe(Selector('.sl-show-animation .sl-frame'))
        .click('#i-1')
        .switchToMainWindow();
    
    await t
        // Inserting 'oranges' text in the search bar
        .typeText('#search-bar', 'oranges')
        // Start searching
        .pressKey('enter')
    
        // Checking the search result
        .expect(Selector('.term-result-found').innerText).contains('"ORANGES"');
    
        // Checking deal badge
        const badge = Selector('.deal-type');
    
    await t
        .expect(badge.exists).ok();        
});