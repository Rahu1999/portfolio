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

export function calculateExperience(joiningDate: Date): number {
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds between the current date and the joining date
  const timeDiff = currentDate.getTime() - joiningDate.getTime();
  
  // Convert milliseconds to years
  const yearsExperience = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
  
  // Return the years of experience rounded to one decimal place
  return parseFloat(yearsExperience.toFixed(1));
}