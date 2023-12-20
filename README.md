# Player Stats Fetcher and CSV Formatter

## Overview
This tool is designed to fetch player statistics from a cloud function and format the data into a CSV file. It's built for backend use with Node.js and leverages the filesystem to organize data by user.

## Features

### Current Features
- Generate a CSV string with all player data including relevant attributes, price, foil, name, number of copies owned...
- Create user-specific directories in the filesystem.
- Write the CSV data to the user's directory.

### Considerations (If Development Is Continued At Any Point)
- Error handling for fetch requests and filesystem operations.
- Optimization of data mapping and CSV formatting for large datasets.
- Integration of a front-end interface to initiate data fetching and monitor progress.
- Deployment as a service with user authentication and multi-tenancy support.

## Installation

### Prerequisites
- Bun.js for those preferring this JavaScript runtime (Windows users currently can't install Bun)

### Setup
1. Download or Clone the repository
2. Extract the zip
3. Open ./server/index.js in any text editor
4. Edit line 5 starting with `const userHive` to include your Hive username (currently greenmask9), Save
5. Open The Project Folder In Terminal
6. Run ```bun index.js```
7. Wait 20-60 seconds
8. Find your .csv file in the /server/databases/${yourUsername}/${yourUsername}.csv
9. I recommend to upload .csv to the Google Disc and open in their table editor. LibreOffice Tables or Microsoft Excel work too
10. Alternatively, you may import the file into your SQL database and use queries if you have that skill

## License & Contributing
This project is open source with no attribution required. Feel free to fork the repository, make improvements, and submit pull requests.
