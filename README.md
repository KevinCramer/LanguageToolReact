
# Coding Patterns and Guidelines

To ensure consistency and maintainability in the codebase, please adhere to the following coding patterns and guidelines:

1. **Component Naming**
   - All component names must be capitalized.
   - Example: `const MyComponent = () => { ... }`

3. **CSS Usage**
   - Use Tailwind CSS

4. **Component libaries **
   - Avoid using component libraries and build everything in house

5. **Root Node of a Component**
   - Use a React Fragment (`<> ... </>`) as the root node of a component whenever possible.
   - This helps to avoid unnecessary wrapper elements in the DOM.

6. **Functional Components**
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

7. **ESLint Warnings**
   - Resolve all ESLint warnings.
   - Ensure your code follows the linting rules defined in the project.

8. **Devtool Errors**
   - Resolve all errors shown in the browser's developer tools.
   - This includes fixing any issues related to JavaScript, network requests, and other runtime errors.

9. **Use ES6 whenever possible**
   - I.e avoid using 'require' and use import instead. 
