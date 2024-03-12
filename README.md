# LIS Data Recommender

## Project Overview

The LIS-DATA Recommender is a React-based frontend application designed to recommend products to users based on their selections across various categories, subcategories, and colors. This application consumes a predefined API to fetch data and provides an intuitive step-by-step selection process culminating in a product list that can be filtered and sorted.

## Features

- Step-by-step product recommendations
- Dynamic filtering based on user preferences
- Sorting of products by rating, price, free delivery and availability
- Responsive design for a seamless experience across devices

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your local machine
- NPM or Yarn to manage packages

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/jakynevs/lis-data-recommender
    ```

2. **Navigate to Project Directory**
    ```
    cd LIS-DATA-RECOMMENDER
    ```

3. **Install NPM packages**
    ```
    npm install
    ```

4. **Create a .env file in the root directory and add the API key**
    ```
    REACT_APP_API_KEY=your_api_key_here
    ```

## Running the Application
Start the development server:
```
    npm start
```
The application will open in your default web browser at http://localhost:3000.

## Usage
Navigate through the application's steps to select categories, subcategories, and colors. The final step displays a list of products tailored to your selections, which you can further filter and sort.

## Project Completion Status

This project successfully meets all the functional and non-functional requirements as outlined, with the exception of unit testing and the option to change language. While the development of some form of testing on the frontend and language localization would enhance the application's robustness and user experience, these features were considered optional and have not been implemented at this stage.

### Implemented Features

- A multi-step product recommendation system based on categories, subcategories, and colors.
- A dynamic product listing with filters for price and free shipping options.
- Product sorting capabilities by rating and price (ascending and descending).

### Future Considerations

The following optional functionalities may be considered for future development cycles:

- Adding unit tests to ensure the reliability and stability of the frontend application.
- Implementing internationalization to allow changing the language on the website.

The decision to forgo these optional features was made to align with the project's initial scope and timeline. Efforts were focused on ensuring a fully functional, well-designed, and user-friendly interface that adheres to the provided API specifications and established best practices in frontend development.

---

# License Compliance Efforts

## Background

In my commitment to maintaining an open-source project that strictly adheres to open-source licensing standards, I encountered a licensing issue with one of our indirect dependencies, `fs-monkey`, which was included in the project through `react-scripts` and its dependencies. 

## Steps Taken for Compliance

### 1. Dependency Audit

Conducted an audit of the project's dependencies using `license-checker` to identify any potential licensing issues. This audit revealed that `fs-monkey`, an indirect dependency, was marked as "UNLICENSED".

### 2. Research and Analysis

Upon discovering the licensing issue with `fs-monkey`:
- Reviewed the usage of `fs-monkey` within the project to understand its role and importance.
- Conducted research to verify the license status of `fs-monkey`, finding that it was indeed unlicensed, which could potentially conflict with the project's open-source nature.

### 3. Updating Dependencies

Regularly updated the dependencies to the latest versions by running `npm update`, in hopes that newer versions of `react-scripts` or its dependencies would resolve the licensing issue by removing or replacing `fs-monkey`.

### 4. Documentation and Transparency

I have documented my efforts and findings regarding this licensing issue in our project's README to maintain transparency, highlighting the importance of open-source license compliance in the project.


