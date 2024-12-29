# Unexpected Implicit Type Coercion in TypeScript

This example demonstrates a potential issue in TypeScript where implicit type coercion can lead to unexpected behavior.  The `printString` function expects a string argument, but a number is passed. TypeScript's type system doesn't catch this because of the implicit type coercion.  This can result in runtime errors or unexpected results depending on how the function handles the input.

The solution shows how to enforce stricter type checking to avoid this issue.  This is a common problem, particularly when dealing with legacy code or libraries that don't enforce strict typing.