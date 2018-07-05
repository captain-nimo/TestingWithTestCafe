#!/bin/bash

testcafe chrome search_and_sorting_en.js
testcafe chrome search_and_sorting_fr.js
testcafe chrome search_and_sorting_mobile.js
testcafe chrome deals_en.js
testcafe chrome deals_mobile.js

echo "All script execution successfully complete"