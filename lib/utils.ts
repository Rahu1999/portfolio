export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export function calculateExperience(joiningDateString: string): string {
  // Parse the joining date string into a Date object
  const joiningDate = new Date(joiningDateString.split('-').reverse().join('-'));

  // Calculate the current date
  const today = new Date();

  // Calculate the difference in years and months
  let years = today.getFullYear() - joiningDate.getFullYear();
  let months = today.getMonth() - joiningDate.getMonth() + 1;

  // Adjust months if necessary
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Return the experience in the desired format
  return `${years}.${months} years`;
}