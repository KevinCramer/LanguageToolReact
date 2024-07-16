
# Coding Patterns and Guidelines

To ensure consistency and maintainability in the codebase, please adhere to the following coding patterns and guidelines:

1. **Component Naming**
   - All component names must be capitalized.
   - Example: `const MyComponent = () => { ... }`

2. **Component Folder Structure**
   - Every component should have its own folder.
   - Each folder must contain a `.tsx` and a `.scss` file.
   - Example folder structure:
     ```
     src/
     ├── components/
     │   ├── MyComponent/
     │   │   ├── MyComponent.tsx
     │   │   ├── MyComponent.scss
     ```

3. **CSS Usage**
   - Avoid using inline CSS unless it needs to be dynamic.
   - Use SCSS files for styling components.

4. **Root Node of a Component**
   - Use a React Fragment (`<> ... </>`) as the root node of a component whenever possible.
   - This helps to avoid unnecessary wrapper elements in the DOM.

5. **Functional Components**
   - All components should be functional components written as arrow functions not named functions.
   - Example:
     ```tsx
     const MyComponent = () => {
       return (
         <>
           {/* Your component JSX */}
         </>
       );
     };
     ```

6. **ESLint Warnings**
   - Resolve all ESLint warnings.
   - Ensure your code follows the linting rules defined in the project.

7. **Devtool Errors**
   - Resolve all errors shown in the browser's developer tools.
   - This includes fixing any issues related to JavaScript, network requests, and other runtime errors.

8. **Use ES6 whenever possible**
   - I.e avoid using 'require' and use import instead. 
