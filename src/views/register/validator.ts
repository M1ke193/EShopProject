export const validator = {
    email: {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
        },
    },
    password: {
        required: 'Password is required',
        minLength: {
            value: 12,
            message: 'The password must be at least 12 characters.',
        },
        pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).{12,}$/,
            message: 'The password must contain at least one uppercase letter and one digit.',
        },
    },
    name: {
        required: 'User name is required',
        pattern: {
            value: /^(?:[A-Za-z0-9]+ ?)*[A-Za-z0-9]+$/,
            message: 'Word should not contain special characters',
        },
    }
};
