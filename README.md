# Testing with TestCafe

	The aim of this project is to automate some functionalities of
https://www.loblaws.ca/ and 
https://www.realcanadiansuperstore.ca/ using the Node.js base automation tool TestCafe.
	There are separate folders (assuming the folders are different projects) for the sites, named 
	'Test_Loblaw_Site' and 'Test_Super_Store_Site' respectively. 

## Getting Started

	Go to 
https://github.com/captain-nimo/Testing_with_TestCafe, and clone or download the git repository to your machine.
	
### Prerequisites

	To run this project with a browser, you need to have a browser (i.e. ‘Chrome’, ‘Firefox’) 
	in your system. Also, you need to install Node.js, npm and TestCafe.
	
### Installation

#### 1. Node Installation:

	Go to 
https://nodejs.org/en/, download the latest version of Node.js and install it.
	
#### 2. TestCafe Installation:

	Now, your machine is ready to install TestCafe. You can do it from the Node.js package 
	manager (npm) with a single command. Open console ('Terminal' for Mac and 'Command Prompt' 
	for windows), type the following text and press Enter:

	  	npm install -g testcafe
	
	If you face any permission issue, run the following command in the colsole and provide udername/password.
		
		sudo npm install -g testcafe
	  		
## Running the tests

#### 1. Test_Loblaw_Site:

##### Description of the files

	There are 1 config file 'config.json' and one utility file 'utilities.js' in this folder. 
	'utilities.js' contains all the common functions for 'Test_Loblaw_Site' project. The test 
	files call these functions to execute test cases. 'config.json' contains the required values
	(i.e. CSS selector values) used in the functions of 'utilities.js' file. If any of these 
	values change in future, we just need to update the values only in 'config.json'.
		
	There are 3 test files in the folder.
			
		i. test_loblaw_site_en.js
		ii. test_loblaw_site_fr.js
		iii. test_loblaw_site_mobile.js
			
	These files executes the test cases. Some functionalitis are implemented by calling TestCafe 
	built-in functions, some functionalities are implemented in the specific files, and some common 
	functionalities are implemented by calling functions from 'utilities.js'.

##### Run the test Scripts for Loblaw website:

	a. In your console, go to the location where the test scripts are saved.

	b. Now run following command to open browser and start the test for 'Loblaw' website: 
	  	
		testcafe browser_name file_name

	    i.e. For chrome: 
	    		
		I. testcafe chrome test_loblaw_site_en.js 
    	II. testcafe chrome test_loblaw_site_fr.js
    	III. testcafe chrome test_loblaw_site_mobile.js 

	    For firefox: 
	    		
	    	I. testcafe firefox test_loblaw_site_en.js
	    	II. testcafe firefox test_loblaw_site_fr.js
	    	III. testcafe firefox test_loblaw_site_mobile.js
	    
	 c. If you want to run all the scripts sequentially by a single command, execute the 
	 following bash file from the local repository.
  
  			‘run_all_loblaw_scripts_in_chrome.sh’/‘run_all_loblaw_scripts_in_firefox.sh’

	    *** To make the bash file executable, please run the following command in console: 
	    	
	    	chmod u+x file_name

	    *** To execute the file, run following commands in the console: 
	    		
	    	For Chrome: ./run_all_loblaw_scripts_in_chrome.sh
	    	For Firefox: ./run_all_loblaw_scripts_in_firefox.sh
	    		
#### 2. Test_Super_Store_Site:

##### Description of the files

	There are 1 config file 'config.json' and one utility file 'utilities.js' in this folder. 
	'utilities.js' contains all the common functions for the 'Test_Super_Store_Site' project. 
	The test files call these functions to execute test cases. 'config.json' contains the 
	required values (i.e. CSS selector values) used in the functions of 'utilities.js' file. 
	If any of these values change in future, we just need to update the values only in 'config.json'.
		
	There are 2 test files in the folder.
			
		i. test_super_store_site_en.js
		ii. test_super_store_site_mobile.js
			
	These files executes the test cases. Some functionalitis are implemented by calling TestCafe 
	built-in functions, some functionalities are implemented in the specific files, and some common 
	functionalities are implemented by calling functions from 'utilities.js'.

##### Run the test Scripts for Real Canadian Super Store website:

	a. In your console, go to the location where the test scripts are saved.

	b. Now run following command to open browser and start the test for 'Loblaw' website: 
	  	
	  		testcafe browser_name file_name

	    i.e. For chrome: 
	    		
	    	I. testcafe chrome test_super_store_site_en.js 
    	II. testcafe chrome test_super_store_site_mobile.js

	    For firefox: 
	    		
	    	I. testcafe firefox test_super_store_site_en.js
	    	II. testcafe firefox test_super_store_site_mobile.js
	    
	c. If you want to run all the scripts sequentially by a single command, execute the 
	following bash file from the local repository.
  
  		‘run_all_super_store_scripts_in_chrome.sh’/‘run_all_super_store_scripts_in_firefox.sh’

	    *** To make the bash file executable, please run the following command in console: 
	    	
	    	chmod u+x file_name

	    *** To execute the file, run following commands in the console: 
	    		
	    	For Chrome: ./run_all_super_store_scripts_in_chrome.sh
	    	For Firefox: ./run_all_super_store_scripts_in_firefox.sh
		
## Repository

	We are using https://github.com as repository. Link of the repository is: 
https://github.com/captain-nimo/Testing_with_TestCafe 

## Authors

***Mahmudul Hasan Robin***

	See also the list of 
[contributors](https://github.com/captain-nimo/Testing_with_TestCafe/contributors) who participated in this project.

## License

	This project is an open source project.

## Acknowledgments

* https://devexpress.github.io/testcafe/documentation/getting-started/
