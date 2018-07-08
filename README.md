# Testing_with_TestCafe

1.	Requirements and installations:
  
  a.	You need to install a browser in your system. i.e. ‘Chrome’, ‘Firefox’.
  
  b.	Node Installation:
  Install Node.js on your computer. Go to https://nodejs.org/en/, download the latest version and install it. 
  
  c.	TestCafe Installation:
  Now, your machine is ready to install TestCafe. You can do it from the Node.js package manager (npm) with a single command. Open console, type the following text and press Enter:
  npm install -g testcafe

2.	Download the test scripts:
  
  a.	Go to https://github.com/captain-nimo/Testing_with_TestCafe and clone or download the git repository to your machine.
  
  b.	There are 2 config/utility files and 3 test scripts for Loblaw website:
    
      i.	lobLaw_config.json
     ii.	loblaw_utilities.js
    iii.	search_and_sorting_en.js
     iv.	search_and_sorting_fr.js
      v.	search_and_sorting_mobile.js
  
  c.	There are 2 config/utility files and 2 test scripts for Real Canadian Super Store website:

      i.	super_store_config.json
     ii.	super_store_utilities.js
    iii.	deals_en.js
     iv.	deals_mobile.js

3.	Run the test Scripts:
    
  a.	In your console, go to the location where the scripts are saved.
    
  b.	Now run following command to open browser and start the test for Loblaw website:
    testcafe browser_name file_name
	  
    i.e. For chrome:
      I.	testcafe chrome search_and_sorting_en.js 
     II.	testcafe chrome search_and_sorting_fr.js 
    III.	testcafe chrome search_and_sorting_mobile.js 

    For firefox:
      I.	testcafe firefox search_and_sorting_en.js
     II.	testcafe firefox search_and_sorting_fr.js 
    III.	testcafe firefox search_and_sorting_mobile.js  

  c.	Run following commands to open browser and start the test for Real Canadian Super Store website:

    For chrome:
      I.	testcafe chrome deals_en.js
     II.	testcafe chrome deals_mobile.js
    
    For firefox:
      I.	testcafe firefox deals_en.js
     II.	testcafe firefox deals_mobile.js

  d.	If you want to run all the scripts sequentially by a single command, execute the ‘run_all_scripts_in_chrome’/’‘run_all_scripts_in_firefox’’ file from the local repository. 

    *** *** To make the bash file executable, please run the following command in console:
      chmod u+x file_name

    *** To execute the file, run following commands in the console:
    For Chrome: ./run_all_scripts_in_chrome.sh
		For Firefox: ./run_all_scripts_in_firefox.sh 


