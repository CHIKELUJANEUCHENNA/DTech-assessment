Overview 
The Profile Manager App is a React-based application designed to allow users to input and manage their personal information, professional experiences, skills, and upload a resume. This application leverages the react-hook-form library for form handling and validation, and styled-components for styling.

Features Personal Information: 
Users can input their first name, last name, email, and phone number. Professional Experiences: Users can add multiple experiences, specifying their role, company, start date, and end date. Skills: Users can list their skills, with the option to add more as needed. 
Resume Upload: Users can upload their resume in PDF or Word format, with a size restriction of 2MB. Setup Instructions Prerequisites Ensure you have Node.js (>= 12.x) and npm (>= 6.x) installed on your machine. A code editor, such as VSCode. Step-by-Step Guide Clone the Repository git clone <repository_url> cd <repository_directory> Install Dependencies In the project directory, run:

npm install This will install all the necessary dependencies listed in package.json.

Run the Application To start the development server, execute: npm start This will launch the app in development mode. By default, it should be accessible at http://localhost:3000 in your browser.

Build for Production To create a production build, use:

npm run build The build artifacts will be stored in the build/ directory. This command optimizes the app for best performance.

Project Structure Here’s a brief overview of the key files and directories in the project:

src/components/: Contains all React components. ProfileManager.tsx: The main component for managing user profiles. TextInput.tsx: Component for handling text inputs. FileInput.tsx: Component for handling file uploads. src/types/index.ts: Type definitions used across the application. public/: Public assets and HTML template. build/: Generated by npm run build, contains the production build. Customization and Usage Modifying the Form You can customize the form by editing ProfileManager.tsx. For example, to add more fields or change validation rules, modify the defaultValues and validation rules within the useForm hook.

Adding Styles Styles are managed using styled-components. You can modify existing styles or add new ones by editing the styled components within each .tsx file.

Additional Notes Validation: 
The application uses react-hook-form for form validation. Adjustments to validation rules can be made directly in the Controller components within ProfileManager.tsx. File Input Handling: Ensure that any changes to file input handling maintain the restrictions on file size and type for consistent user experience. Responsiveness: The layout is designed to be responsive, but further customization might be needed to support specific device sizes or orientations. Contributions Contributions are welcome! Please fork the repository and create a pull request with your enhancements or bug fixes. Make sure to follow the existing code style and include relevant tests where necessary.