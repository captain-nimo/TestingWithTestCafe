#!/bin/bash

testcafe firefox search_and_sorting_en.js
testcafe firefox search_and_sorting_fr.js
testcafe firefox search_and_sorting_mobile.js
testcafe firefox deals_en.js
testcafe firefox deals_mobile.js

echo "All script execution in chrome browser successfully complete"