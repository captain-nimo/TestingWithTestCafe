#!/bin/bash

testcafe firefox test_super_store_site_en.js
testcafe firefox test_super_store_site_mobile.js

echo "All script execution in chrome browser successfully complete"