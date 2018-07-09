#!/bin/bash

testcafe chrome test_super_store_site_en.js
testcafe chrome test_super_store_site_mobile.js

echo "All script execution in chrome browser successfully complete"