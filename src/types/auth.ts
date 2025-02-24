// Import the User type from Supabase's JavaScript client library
// This type contains all the user properties that Supabase provides
import { User } from "@supabase/supabase-js";

// Create a type alias 'UserResponse' that is exactly the same as Supabase's User type
// This allows us to maintain consistent typing throughout our application
export type UserResponse = User;

// Define an interface for authentication errors
// This provides a standardized structure for error handling
export interface AuthError {
  // The error message string that describes what went wrong
  message: string;
}

// Define the main authentication state interface
// This interface represents the complete auth state of our application
export interface AuthState {
  // The currently authenticated user (UserResponse) or null if not logged in
  user: UserResponse | null;
  // A boolean flag indicating if authentication operations are in progress
  loading: boolean;
  // Any authentication error that occurred, or null if no error
  error: AuthError | null;
}
