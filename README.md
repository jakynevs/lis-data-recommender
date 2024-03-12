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

I have documented my efforts and findings regarding this licensing issue in our project's README to maintain transparency with our users and contributors, highlighting the importance of open-source license compliance in the project.

