#!/bin/bash

testcafe chrome test_loblaw_site_en.js
testcafe chrome test_loblaw_site_fr.js
testcafe chrome test_loblaw_site_mobile.js

echo "All script execution in chrome browser successfully complete"